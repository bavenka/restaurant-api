import pool from '../db/connection';

import * as cartRepository from '../repositories/cartRepository';
import * as userRepository from '../repositories/userRepository';
import * as dishRepository from '../repositories/dishRepository';


import CustomError from "../errors/custom-error";

export const addDishToCart = async (userId, dishId, details) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const userData = await userRepository.getUserById(userId, client);

        const existingUser = await userData.rows[0];
        if (!existingUser) {
            throw new CustomError(`User with id = ${userId} not found`, 204);
        }

        const dishData = await dishRepository.getDish(dishId, client);

        const existingDish = await dishData.rows[0];
        if (!existingDish) {
            throw new CustomError(`Dish with id = ${dishId} not found`, 204);
        }

        const cartDishData = await cartRepository.getDishFromCart(userId, dishId, client);

        const cartDish = await cartDishData.rows[0];

        const data = (cartDish)
            ? await cartRepository.updateCart(userId, dishId, cartDish.id, details, client)
            : await cartRepository.addDishToCart(userId, dishId, details, client);

        await client.query('COMMIT');

        return data;

    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
};

export const deleteDishFromCart = async (userId, dishId,) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const userData = await userRepository.getUserById(userId, client);

        const existingUser = await userData.rows[0];
        if (!existingUser) {
            throw new CustomError(`User with id = ${userId} not found`, 204);
        }

        const dishData = await dishRepository.getDish(dishId, client);

        const existingDish = await dishData.rows[0];
        if (!existingDish) {
            throw new CustomError(`Dish with id = ${dishId} not found`, 204);
        }

        const cartDishData = await cartRepository.getDishFromCart(userId, dishId, client);

        const cartDish = await cartDishData.rows[0];
        if (!cartDish) {
            throw new CustomError(`Dish with id = ${dishId} is not exists`, 409);
        }

        await cartRepository.deleteDishFromCart(cartDish.id, client);

        await client.query('COMMIT');
    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
};

export const getDishesFromCart = async (userId) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const userData = await userRepository.getUserById(userId, client);

        const existingUser = await userData.rows[0];
        if (!existingUser) {
            throw new CustomError(`User with id = ${userId} not found`, 204);
        }

        const data = await cartRepository.getDishesFromCart(userId, client);

        await client.query('COMMIT');

        return data;

    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
};

export const clearCart = async (userId) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const userData = await userRepository.getUserById(userId, client);

        const existingUser = await userData.rows[0];
        if (!existingUser) {
            throw new CustomError(`User with id = ${userId} not found`, 204);
        }

        await cartRepository.clearCart(userId, client);

        await await client.query('COMMIT');
    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
};



