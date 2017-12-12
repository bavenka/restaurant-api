import {insertQuery, deleteQuery, selectQuery, updateQuery} from './generic';

import {QUERY_NAME, TABLE_NAME} from '../db/constants';

export const createDish = (dish, client) => client
    .query(insertQuery(dish, TABLE_NAME.DISH));

export const deleteDish = (id, client) =>
    client.query(deleteQuery({id}, TABLE_NAME.DISH));

export const getDish = (id, client) =>
    client.query(selectQuery({id}, TABLE_NAME.DISH, QUERY_NAME.GET_DISH));

export const getDishesByCategoryId = (categoryId, client) =>
    client.query(selectQuery({categoryId}, TABLE_NAME.DISH, QUERY_NAME.GET_DISHES_BY_CATEGORY_ID));

export const updateDish = (dish, id, client) =>
    client.query(updateQuery(dish, id, TABLE_NAME.DISH));
