import jwt from 'jsonwebtoken';

import config from '../config';

export const createToken = (payload) => {
    const { secret, options } = config.jwt;

    return jwt.sign(payload, secret, options);
};

