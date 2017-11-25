import {insertQuery, deleteQuery, selectQuery, updateQuery} from './generic';

import {QUERY_NAME, TABLE_NAME} from '../db/constants';

export const createDish = (dish, client) => client
    .query(insertQuery(dish, TABLE_NAME.DISHES));

export const deleteDish = (id, client) =>
    client.query(deleteQuery({id}, TABLE_NAME.DISHES));

export const getDish = (id, client) =>
    client.query(selectQuery({id}, TABLE_NAME.DISHES, QUERY_NAME.GET_DISH));

export const updateDish = (dish, id, client) =>
    client.query(updateQuery(dish, id, TABLE_NAME.DISHES));
