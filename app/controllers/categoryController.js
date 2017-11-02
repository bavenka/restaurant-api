import * as categoryService from '../services/categoryService';

export const createCategory = (req, res, next) => {
    categoryService
        .createCategory(req.body)
        .then(data => res.status(201).json(data.rows[0]))
        .catch(e => next(e))
};

export const deleteCategory = (req, res, next) => {
    categoryService
        .deleteCategory(req.body)
        .then(data => res.status(201))
        .catch(e => next(e))
};

