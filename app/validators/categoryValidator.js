import Joi from 'joi';

export default {
    body: {
        name: Joi.string().required(),
        parent_id: Joi.number().integer().min(1),
    },
};