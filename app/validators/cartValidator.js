import Joi from 'joi';

export const addingDish = {
    params: {
        userId: Joi.number().integer().min(1).required(),
        dishId: Joi.number().integer().min(1).required(),
    },
    body: {
        total: Joi.number().integer().min(0).required(),
        quantity: Joi.number().integer().min(0).required(),
    },
};

export const deletingDish = {
    params: {
        userId: Joi.number().integer().min(1).required(),
        dishId: Joi.number().integer().min(1).required(),
    }
};

export const clearingCart = {
    params: {
        userId: Joi.number().integer().min(1).required()
    }
};

export const gettingDishes = {
    params: {
        userId: Joi.number().integer().min(1).required()
    }
};


