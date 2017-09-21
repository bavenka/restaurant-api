import * as userRepository from '../repositories/userRepository';

import { hashPassword }from '../utils';


export const saveUser = async (user) => {
    const { password } = user;

    try {
        user.password = await hashPassword(password);
    } catch (e) {
        throw e;
    }
    return userRepository.saveUser(user);
};