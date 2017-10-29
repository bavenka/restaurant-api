import pool  from '../db/connection';

import { insertQuery } from './generic';

import { QUERY_NAME, TABLE_NAME } from '../db/constants';

export const createCategory = (category) => pool
    .query(insertQuery(category, TABLE_NAME.CATEGORIES, QUERY_NAME.CREATE_CATEGORY));