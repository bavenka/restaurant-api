import pool from '../db/connection';

import {insertQuery, selectQuery} from './generic';

import {QUERY_NAME, TABLE_NAME} from '../db/constants';

export const saveUser = (user) => pool.query(insertQuery(user, TABLE_NAME.USERS));

export const getUserByEmail = (email) =>
    pool.query(selectQuery({email}, TABLE_NAME.USERS, QUERY_NAME.GET_USER_BY_EMAIL));

export const getUserByGoogleId = (googleId) =>
    pool.query(selectQuery({googleId}, TABLE_NAME.USERS, QUERY_NAME.GET_USER_BY_GOOGLE_ID));

export const getUserByVkontakteId = (vkontakteId) =>
    pool.query(selectQuery({vkontakteId}, TABLE_NAME.USERS, QUERY_NAME.GET_USER_BY_VKONTAKTE_ID));

export const getUserByFacebookId = (facebook_id) =>
    pool.query(selectQuery({facebook_id}, TABLE_NAME.USERS, QUERY_NAME.GET_USER_BY_FACEBOOK_ID));
