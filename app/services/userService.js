import { UnauthorizedError } from 'express-jwt';

import { createToken } from './jwtService';

import * as userRepository from '../repositories/userRepository';

import { hashPassword, checkPassword } from '../utils';

export const saveUser = async (user) => {
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

export const getUserByEmail = (email) => {
    const user = {
        email,
    };
    return userRepository.getUserByEmail(user);
};

export const authenticate = async (email, password) => {
    try {
        const data = await getUserByEmail(email);
        const user = await data.rows[0];

        if (!user) {
            throw new UnauthorizedError(401, new Error('Invalid credentials'));
        }

        const { password: hashedPassword }  =  user;

        const isValid = await checkPassword(password, hashedPassword);
        if (!isValid) {
            throw new UnauthorizedError(401, new Error('Invalid credentials'));
        }

        return createToken(user);

    } catch (e) {
        throw e;
    }
};



