import { createToken } from './jwtService';

import * as userRepository from '../repositories/userRepository';

import { hashPassword, checkPassword } from '../utils';
import CustomError from "../errors/custom-error";

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

export const getUserByEmail = (email) => userRepository.getUserByEmail(email);

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



