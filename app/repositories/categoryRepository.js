import {insertQuery, deleteQuery, selectQuery, updateQuery} from './generic';

import {QUERY_NAME, TABLE_NAME} from '../db/constants';

export const createCategory = (category, client) =>
    client.query(insertQuery(category, TABLE_NAME.CATEGORY));

export const deleteCategory = (id, client) =>
    client.query(deleteQuery({id}, TABLE_NAME.CATEGORY));

export const getCategoriesByParentId = (parentId, client) =>
    client.query(selectQuery({parentId}, TABLE_NAME.CATEGORY, QUERY_NAME.GET_CATEGORIES_BY_PARENT_ID));

export const updateCategory = (category, id, client) =>
    client.query(updateQuery(category, id, TABLE_NAME.CATEGORY));

export const getCategory = (id, client) =>
    client.query(selectQuery({id}, TABLE_NAME.CATEGORY));

export const getRootCategories = (client) =>
    client.query(selectQuery({"parentId": null}, TABLE_NAME.CATEGORY, QUERY_NAME.GET_ROOT_CATEGORIES));
