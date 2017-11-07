import { createToken } from './jwtService';

import * as userRepository from '../repositories/userRepository';

import { hashPassword, checkPassword } from '../utils';
import CustomError from "../errors/custom-error";

export const registerUser = async (user) => {
    const {password} = user;

    try {
        user.password = await hashPassword(password);
        const data = await userRepository.saveUser(user);
        const existingUser = await data.rows[0];

        return createToken(existingUser);
    } catch (e) {
        throw e;
    }
};

export const saveUser = (user) => userRepository.saveUser(user);

export const getUserByEmail = (email) => userRepository.getUserByEmail(email);

export const getUserByGoogleId = (googleId) => userRepository.getUserByGoogleId(googleId);

export const getUserByFacebookId = (facebookId) => userRepository.getUserByFacebookId(facebookId);

export const getUserByVkontakteId = (vkontakteId) => userRepository.getUserByVkontakteId(vkontakteId);

export const authenticate = async (email, password) => {
    try {
        const data = await getUserByEmail(email);
        const user = await data.rows[0];

        if (!user) {
            throw new CustomError('Invalid credentials', 401);
        }

        const { password: hashedPassword }  =  user;

        const isValid = await checkPassword(password, hashedPassword);
        if (!isValid) {
            throw new CustomError('Invalid credentials', 401);
        }

        return createToken(user);

    } catch (e) {
        throw e;
    }
};

export const authenticateByGoogle = async (accessToken, refreshToken, profile, done) => {
    try {
        const {id: googleId, name: {familyName: lastName, givenName: name}, emails} = profile;

        const data = await getUserByGoogleId(googleId);
        const user = await data.rows[0];

        if (user) {
            return done(null, user);
        }

        const newUser = {
            googleId,
            "googleEmail": emails[0].value,
            name,
            lastName,
        };

        const existingData = await saveUser(newUser);
        const existingUser = await existingData.rows[0];

        return done(null, existingUser);
    } catch (error) {
        return done(error, null);
    }
};

export const authenticateByFacebook = async (accessToken, refreshToken, profile, done) => {
    try {
        const {id: facebookId, name: {familyName: lastName, givenName: name}, emails} = profile;

        const data = await getUserByFacebookId(facebookId);
        const user = await data.rows[0];

        if (user) {
            return done(null, user);
        }

        const newUser = {
            facebookId,
            "googleEmail": emails[0].value,
            name,
            lastName,
        };

        const existingData = await saveUser(newUser);
        const existingUser = await existingData.rows[0];

        return done(null, existingUser);
    } catch (error) {
        return done(error, null);
    }
};

export const authenticateByVkontakte = async (accessToken, refreshToken, params, profile, done) => {
    try {
        const { id: vkontakteId, name: {familyName: lastName, givenName: name} } = profile;
        const { email: vkontakteEmail } = params;

        const data = await getUserByVkontakteId(vkontakteId);
        const user = await data.rows[0];

        if (user) {
            return done(null, user);
        }

        const newUser = {
            vkontakteId,
            vkontakteEmail,
            name,
            lastName,
        };

        const existingData = await saveUser(newUser);
        const existingUser = await existingData.rows[0];

        return done(null, existingUser);
    } catch (error) {
        return done(error, null);
    }
};




