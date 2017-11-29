import Joi from 'joi';

export const categoryCreating = {
    body: {
        name: Joi.string().required(),
        parent_id: Joi.number().integer().min(1),
    },
};

export const categoryUpdating = {
    params: {
        id: Joi.number().integer().min(1).required(),
    },
    body: {
        name: Joi.string(),
        parent_id: Joi.number().integer().min(1),
    },
};

export const categoryDeleting = {
    params: {
        id: Joi.number().integer().min(1).required(),
    },
};

export const dishesGettingByCategoryId = {
    params: {
        categoryId: Joi.number().integer().min(1).required(),
    },
};

export const categoriesGettingByParentId = {
    params: {
        parentId: Joi.number().integer().min(1).required(),
    },
};