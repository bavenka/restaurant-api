import {insertQuery, deleteQuery, selectQuery, updateQuery} from './generic';

import {selectDishesFromWishList} from './impl';

import {QUERY_NAME, TABLE_NAME} from '../db/constants';

export const addDishToWishList = (userId, dishId, client) => {
    return client.query(insertQuery({customer_id: userId, dish_id:dishId}, TABLE_NAME.WISH_LIST));
};

export const deleteDishFromWishList = (wishListId, client) =>
    client.query(deleteQuery({id: wishListId}, TABLE_NAME.WISH_LIST));

export const getDishesFromWishList = (userId, client) =>
    client.query(selectDishesFromWishList({customer_id: userId}, QUERY_NAME.GET_DISHES_FROM_WISH_LIST));

export const getDishFromWishList = (userId, dishId, client) =>
    client.query(selectQuery({customer_id: userId, dish_id: dishId}, TABLE_NAME.WISH_LIST, QUERY_NAME.GET_DISH_FROM_WISH_LIST));

export const clearWishList = (userId, client) =>
    client.query(deleteQuery({customer_id: userId}, TABLE_NAME.WISH_LIST));