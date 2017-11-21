import Joi from 'joi';

export const dishCreating = {
    body: {
        name: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.string().required(),
        description: Joi.string().required(),
        mass: Joi.string().required(),
        length: Joi.string().required(),
    },
};

export const dishUpdating = {
    params: {
        id: Joi.number().integer().min(1).required(),
    },
    body: {
        name: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.string().required(),
        description: Joi.string().required(),
        mass: Joi.string().required(),
        length: Joi.string().required(),
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


