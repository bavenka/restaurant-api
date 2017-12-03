import {insertQuery, deleteQuery, selectQuery} from './generic';

import {TABLE_NAME, QUERY_NAME} from '../db/constants';

export const bookTable = (userId, details, client) => {

    const {guestsCount, date} = details;

    return client.query(insertQuery({
        user_id: userId,
        guests_count: guestsCount,
        date: date.toISOString()
    }, TABLE_NAME.RESERVATION));
};

export const cancelUserReservation = (reservationId, client) =>
    client.query(deleteQuery({id: reservationId}, TABLE_NAME.RESERVATION));

export const getUserReservation = (userId, reservationId, client) =>
    client.query(selectQuery({user_id: userId, id: reservationId}, TABLE_NAME.RESERVATION, QUERY_NAME.GET_USER_RESERVATION));

export const getUserReservations = (userId, client) =>
    client.query(selectQuery({user_id: userId}, TABLE_NAME.RESERVATION, QUERY_NAME.GET_USER_RESERVATIONS));

