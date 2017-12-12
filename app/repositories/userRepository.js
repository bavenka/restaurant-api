import {insertQuery, selectQuery} from './generic';

import {QUERY_NAME, TABLE_NAME} from '../db/constants';

export const saveUser = (user, client) => client.query(insertQuery(user, TABLE_NAME.USER));

export const getUserByEmail = (email, client) =>
    client.query(selectQuery({email}, TABLE_NAME.USER, QUERY_NAME.GET_USER_BY_EMAIL));

export const getUserByGoogleId = (googleId, client) =>
    client.query(selectQuery({googleId}, TABLE_NAME.USER, QUERY_NAME.GET_USER_BY_GOOGLE_ID));

export const getUserById = (id, client) =>
    client.query(selectQuery({id}, TABLE_NAME.USER, QUERY_NAME.GET_USER_BY_ID));

