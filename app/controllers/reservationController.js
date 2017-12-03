import * as reservationService from '../services/reservationService';

export const bookTable = (req, res, next) => {
    reservationService
        .bookTable(req.params.userId, req.body)
        .then(data => res.status(201).json(data))
        .catch(e => next(e))
};

export const cancelReservation = (req, res, next) => {
    reservationService
        .cancelUserReservation(req.params.userId, req.params.reservationId)
        .then(data => res.status(200).end())
        .catch(e => next(e))
};

export const getUserReservations = (req, res, next) => {
    reservationService
        .getUserReservations(req.params.userId)
        .then(data => res.status(200).json(data.rows))
        .catch(e => next(e))
};

export const addDishesToReservation =(req, res, next) => {
    reservationService
        .addDishesToReservation(req.params)

};