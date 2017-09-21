import { UnauthorizedError } from 'express-jwt';

import { createToken } from './jwtService';

import * as userRepository from '../repositories/userRepository';

import { hashPassword, checkPassword } from '../utils';

export const saveUser = async (user) => {
    const {password} = user;

    try {
        user.password = await hashPassword(password);
    } catch (e) {
        throw e;
    }
    return userRepository.saveUser(user);
};

export const getUserByEmail = (email) => {
    const user = {
        email,
    };
    return userRepository.getUserByEmail(user);
};

export const login = async (email, password) => {
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

        const payload = {
          id: user.id,
          email: user.email
        };
        return createToken(payload);

    } catch (e) {
        throw e;
    }
};



