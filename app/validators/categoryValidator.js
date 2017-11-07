import Joi from 'joi';

export const categoryCreating = {
    body: {
        name: Joi.string().required(),
        parent_id: Joi.number().integer().min(1),
    },
};

export const categoryDeleting = {
    params: {
        id: Joi.number().integer().min(1).required(),
    },
};