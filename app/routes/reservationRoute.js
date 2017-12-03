import express from 'express';
import validate from 'express-validation';

import * as reservationValidator from '../validators/reservationValidator';

import * as reservationController from '../controllers/reservationController';

const router = express.Router();

router.delete('/:userId/reservations/:reservationId/cancel', validate(reservationValidator.cancelingReservation), reservationController.cancelReservation);

router.post('/:userId/reservations/create', validate(reservationValidator.reservationTable), reservationController.bookTable);

router.get('/:userId/reservations', validate(reservationValidator.gettingUserReservations), reservationController.getUserReservations);

export default router;