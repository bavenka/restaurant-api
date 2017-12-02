import pool from '../db/connection';

import * as cartRepository from '../repositories/cartRepository';
import * as userRepository from '../repositories/userRepository';
import * as dishRepository from '../repositories/dishRepository';


import CustomError from "../errors/custom-error";

export const addDishToCart = async (userId, dishId) => {
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
        if (cartDish) {
            throw new CustomError(`Dish with id = ${dishId} already exists`, 409);
        }


        const data = await cartRepository.addDishToCart(userId, dishId, client);

        await client.query('COMMIT');

        return data;

    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
};

export const deleteDishFromCart = async (dishId, userId) => {
    const client = await pool.connect();
    try {
        return await cartRepository.deleteDishFromCart(dishId, userId, client);
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
};

export const getDishesFromCart = async (userId) => {
    const client = await pool.connect();
    try {
        return await cartRepository.getDishesFromCart(userId, client);
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
};

export const clearCart = async (userId) => {
    const client = await pool.connect();
    try {
        return await cartRepository.clearCart(userId, client);
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
};



