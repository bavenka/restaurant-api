import {insertQuery, deleteQuery, selectQuery, updateQuery} from './generic';

import {selectDishesFromCart} from './impl';

import {QUERY_NAME, TABLE_NAME} from '../db/constants';

export const addDishToCart = (userId, dishId, details, client) => {
    const {quantity, total} = details;
    return client.query(insertQuery({user_id: userId, dish_id:dishId, quantity, total}, TABLE_NAME.CART));
};

export const updateCart = (userId, dishId, cartId, details, client) => {
    const {quantity, total} = details;
    return client.query(updateQuery({user_id: userId, dish_id: dishId, quantity, total}, cartId, TABLE_NAME.CART));
};
export const deleteDishFromCart = (cartId, client) =>
    client.query(deleteQuery({id: cartId}, TABLE_NAME.CART));

export const getDishesFromCart = (userId, client) =>
    client.query(selectDishesFromCart({user_id: userId}, QUERY_NAME.GET_DISHES_FROM_CART));

export const getDishFromCart = (userId, dishId, client) =>
    client.query(selectQuery({user_id: userId, dish_id: dishId}, TABLE_NAME.CART, QUERY_NAME.GET_DISH_FROM_CART));

export const clearCart = (userId, client) =>
    client.query(deleteQuery({user_id: userId}, TABLE_NAME.CART));
