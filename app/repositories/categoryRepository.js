import pool from '../db/connection';

import {insertQuery, deleteQuery, selectQuery, updateQuery} from './generic';

import {QUERY_NAME, TABLE_NAME} from '../db/constants';

export const createCategory = (category) => pool
    .query(insertQuery(category, TABLE_NAME.CATEGORIES));

export const deleteCategory = (id) => pool
    .query(deleteQuery(id, TABLE_NAME.CATEGORIES));

export const getCategory = (id) => pool
    .query(selectQuery(id, TABLE_NAME.CATEGORIES, QUERY_NAME.GET_CATEGORY));

export const updateCategory = (category, id) => pool
    .query(updateQuery(category, id, TABLE_NAME.CATEGORIES));
