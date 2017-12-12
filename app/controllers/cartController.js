import * as cartService from '../services/cartService';

export const addDishToCart = (req, res, next) => {
    cartService
        .addOrUpdateDishToCart(req.params.userId, req.params.dishId, req.body)
        .then(data => res.status(201).json(data.rows[0]))
        .catch(e => next(e))
};

export const deleteDishFromCart = (req, res, next) => {
    cartService
        .deleteDishFromCart(req.params.userId, req.params.dishId)
        .then(data => res.status(200).end())
        .catch(e => next(e))
};

export const clearCart = (req, res, next) => {
    cartService
        .clearCart(req.params.userId)
        .then(data => res.status(200).end())
        .catch(e => next(e))
};

export const getDishesFromCart = (req, res, next) => {
    cartService
        .getDishesFromCart(req.params.userId)
        .then(data => res.status(200).json(data.rows))
        .catch(e => next(e))
};