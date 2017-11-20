import * as dishService from '../services/dishService';

export const createDish = (req, res, next) => {
    dishService
        .createDish(req.body)
        .then(data => res.status(201).json(data.rows[0]))
        .catch(e => next(e))
};

export const updateDish = (req, res, next) => {
    dishService
        .updateDish(req.body, req.params.id)
        .then(data => res.status(200).json(data.rows[0]))
        .catch(e => next(e))
};

export const deleteDish = (req, res, next) => {
    dishService
        .deleteDish(req.params.id)
        .then(data => res.status(200).end())
        .catch(e => next(e))
};
