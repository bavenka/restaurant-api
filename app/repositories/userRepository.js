import pool  from '../db/connection/index';

import { insertQuery } from './generic/index';

import { QUERY_NAME, TABLE_NAME } from '../db/constants/index';

export const saveUser = (user) => pool.query(insertQuery(user, TABLE_NAME.USERS, QUERY_NAME.SAVE_USER));
