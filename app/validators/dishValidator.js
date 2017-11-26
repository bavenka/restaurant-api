import Joi from 'joi';

export const dishCreating = {
    body: {
        name: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.string().required(),
        description: Joi.string().required(),
        mass: Joi.string(),
        length: Joi.string(),
    },
};

export const dishUpdating = {
    params: {
        id: Joi.number().integer().min(1).required(),
    },
    body: {
        name: Joi.string(),
        price: Joi.number(),
        image: Joi.string(),
        description: Joi.string(),
        mass: Joi.string(),
        length: Joi.string(),
    },
};

export const dishDeleting = {
    params: {
        id: Joi.number().integer().min(1).required(),
    },
};

export const dishGetting = {
    params: {
        id: Joi.number().integer().min(1).required(),
    },
};



