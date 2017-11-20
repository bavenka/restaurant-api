import {insertQuery, deleteQuery, selectQuery, updateQuery} from './generic';

import {QUERY_NAME, TABLE_NAME} from '../db/constants';

export const createCategory = (category, client) => client
    .query(insertQuery(category, TABLE_NAME.CATEGORIES));

export const deleteCategory = (id, client) =>
    client.query(deleteQuery({id}, TABLE_NAME.CATEGORIES));

export const getCategory = (id, client) => client
    .query(selectQuery({id}, TABLE_NAME.CATEGORIES, QUERY_NAME.GET_CATEGORY));

export const updateCategory = (category, id, client) => client
    .query(updateQuery(category, id, TABLE_NAME.CATEGORIES));
