import pool from '../db/connection';

import {createToken} from './jwtService';

import * as userRepository from '../repositories/userRepository';

import {hashPassword, checkPassword} from '../utils';
import CustomError from "../errors/custom-error";

export const registerUser = async (user) => {
    const client = await pool.connect();

    const {password} = user;

    try {
        user.password = await hashPassword(password);

        const data = await userRepository.saveUser(user, client);
        const existingUser = await data.rows[0];

        return createToken(existingUser);
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
};

export const authenticate = async (email, password) => {
    const client = await pool.connect();
    try {
        const data = await userRepository.getUserByEmail(email, client);
        const user = await data.rows[0];

        if (!user) {
            throw new CustomError('Invalid credentials', 401);
        }

        const {password: hashedPassword} = user;

        const isValid = await checkPassword(password, hashedPassword);
        if (!isValid) {
            throw new CustomError('Invalid credentials', 401);
        }

        return createToken(user);

    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
};

export const authenticateByGoogle = async (accessToken, refreshToken, profile, done) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const {id: googleId, name: {familyName: lastName, givenName: name}, emails} = profile;

        const data = await userRepository.getUserByGoogleId(googleId, client);
        const user = await data.rows[0];

        if (user) {
            await client.query('COMMIT');

            return done(null, user);
        }

        const newUser = {
            googleId,
            "googleEmail": emails[0].value,
            "name": `${name} ${lastName}`,
        };

        const existingData = await userRepository.saveUser(newUser, client);
        const existingUser = await existingData.rows[0];

        await client.query('COMMIT');

        return done(null, existingUser);

    } catch (error) {
        await client.query('ROLLBACK');
        return done(error, null);
    } finally {
        client.release();
    }
};




