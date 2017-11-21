import {insertQuery, selectQuery} from './generic';

import {QUERY_NAME, TABLE_NAME} from '../db/constants';

export const saveUser = (user, client) => client.query(insertQuery(user, TABLE_NAME.USERS));

export const getUserByEmail = (email, client) =>
    client.query(selectQuery({email}, TABLE_NAME.USERS, QUERY_NAME.GET_USER_BY_EMAIL));

export const getUserByGoogleId = (googleId, client) =>
    client.query(selectQuery({googleId}, TABLE_NAME.USERS, QUERY_NAME.GET_USER_BY_GOOGLE_ID));

