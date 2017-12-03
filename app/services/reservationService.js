import pool from '../db/connection';

import * as reservationRepository from '../repositories/reservationRepository';
import * as userRepository from '../repositories/userRepository';
import CustomError from "../errors/custom-error";

export const bookTable = async (userId, details) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const userData = await userRepository.getUserById(userId, client);

        const existingUser = await userData.rows[0];
        if (!existingUser) {
            throw new CustomError(`User with id = ${userId} not found`, 204);
        }

        const data = await reservationRepository.bookTable(userId, details, client);

        await client.query('COMMIT');

        return data;

    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
};

export const cancelUserReservation = async (userId, reservationId) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const userData = await userRepository.getUserById(userId, client);

        const existingUser = await userData.rows[0];
        if (!existingUser) {
            throw new CustomError(`User with id = ${userId} not found`, 204);
        }

        const reservationData = await reservationRepository.getUserReservation(userId, reservationId, client);

        const reservation = await reservationData.rows[0];

        if (!reservation) {
            throw new CustomError(`Reservation with id = ${reservationId} not exists`, 401)
        }

        await reservationRepository.cancelUserReservation(reservationId, client);

        await client.query('COMMIT');

    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
};

export const getUserReservations = async (userId) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const userData = await userRepository.getUserById(userId, client);

        const existingUser = await userData.rows[0];
        if (!existingUser) {
            throw new CustomError(`User with id = ${userId} not found`, 204);
        }

        const data = await reservationRepository.getUserReservations(userId, client);

        await client.query('COMMIT');

        return data;

    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
};