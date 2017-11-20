import pool from '../db/connection';

import {insertQuery, deleteQuery, selectQuery, updateQuery} from './generic';

import {QUERY_NAME, TABLE_NAME} from '../db/constants';

export const createDish = (dish) => pool
    .query(insertQuery(dish, TABLE_NAME.DISHES));

export const deleteDish = (id) => pool
    .query(deleteQuery({id}, TABLE_NAME.DISHES));

export const getDish = (id) => pool
    .query(selectQuery({id}, TABLE_NAME.DISHES, QUERY_NAME.GET_DISH));

export const updateDish = (dish, id) => pool
    .query(updateQuery(dish, id, TABLE_NAME.DISHES));
