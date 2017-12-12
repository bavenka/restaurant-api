import * as categoryService from '../services/categoryService';

export const createCategory = (req, res, next) => {
    categoryService
        .createCategory(req.body)
        .then(data => res.status(201).json(data.rows[0]))
        .catch(e => next(e))
};

export const updateCategory = (req, res, next) => {
    categoryService
        .updateCategory(req.body, req.params.id)
        .then(data => res.status(200).json(data.rows[0]))
        .catch(e => next(e))
};

export const deleteCategory = (req, res, next) => {
    categoryService
        .deleteCategory(req.params.id)
        .then(data => res.status(200).end())
        .catch(e => next(e))
};

export const getCategoriesByParentId = (req, res, next) => {
    categoryService
        .getCategoriesByParentId(req.params.parentId)
        .then(data => res.status(200).json(data.rows))
        .catch(e => next(e))
};

export const getRootCategories = (req, res, next) => {
    categoryService
        .getRootCategories()
        .then(data => res.status(200).json(data.rows))
        .catch(e => next(e))
};


