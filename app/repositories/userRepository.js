import pool  from '../db/connection';

import { insertQuery, selectQuery } from './generic';

import { QUERY_NAME, TABLE_NAME } from '../db/constants';

export const saveUser = (user) => pool.query(insertQuery(user, TABLE_NAME.USERS, QUERY_NAME.SAVE_USER));

export const getUserByEmail = (email) =>
    pool.query(selectQuery(email, TABLE_NAME.USERS, QUERY_NAME.GET_USER_BY_EMAIL));