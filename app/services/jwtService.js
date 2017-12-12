import jwt from 'jsonwebtoken';

import config from '../config';

export const createToken = (user) => {
    const { secret, options } = config.jwt;

    return jwt.sign({
        id: user.id,
        name: user.name,
    }, secret, options);
};

