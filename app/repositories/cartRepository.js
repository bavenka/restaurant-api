import {insertQuery, deleteQuery, selectQuery} from './generic';

import {QUERY_NAME, TABLE_NAME} from '../db/constants';

export const addDishToCart = (userId, dishId, client) =>
    client.query(insertQuery({userId, dishId}, TABLE_NAME.CART));

export const deleteDishFromCart = (dishId, userId, client) =>
    client.query(deleteQuery({dishId, userId}, TABLE_NAME.CART));

export const getDishesFromCart = (userId, client) =>
    client.query(selectQuery({userId}, TABLE_NAME.CART, QUERY_NAME.GET_DISHES_FROM_CART));

export const getDishFromCart = (userId, dishId, client) =>
    client.query(selectQuery({userId, dishId}, TABLE_NAME.CART, QUERY_NAME.GET_DISH_FROM_CART));

export const clearCart = (userId, client) =>
    client.query(deleteQuery({userId}, TABLE_NAME.CART));
