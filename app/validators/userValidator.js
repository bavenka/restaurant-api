import Joi from 'joi';

export default {
    body: {
        name: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    },
};