import Joi from 'joi';

export default {
    body: {
        name: Joi.string().alphanum().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    },
};