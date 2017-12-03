import Joi from 'joi';

export const reservationTable = {
    params: {
        userId: Joi.number().integer().min(1).required(),
    },
    body: {
        date: Joi.date().required(),
        guestsCount: Joi.number().integer().min(1).required(),
    },
};

export const cancelingReservation = {
    params: {
        userId: Joi.number().integer().min(1).required(),
        reservationId: Joi.number().integer().min(1).required(),
    },
};

export const gettingUserReservations = {
    params: {
        userId: Joi.number().integer().min(1).required(),
    },
};