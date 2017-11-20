import pool from '../db/connection';

import * as dishRepository from '../repositories/dishRepository';
import CustomError from "../errors/custom-error";

export const createDish = (dish) => dishRepository.createDish(dish);

export const getDish= (id) => dishRepository.getDish(id);

export const updateDish = async (dish, id) => {
    const client = pool.connect();
    try {
        await client.query('BEGIN');

        const data = await getDish(id);
        const dish = await data.rows[0];
        if (!dish) {
            throw new CustomError(`Dish with id = ${id} not found`, 204);
        }
        const updatedDish = await dishRepository.updateDish(dish, id);

        await client.query('COMMIT');
        return updatedDish;
    }catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
};

export const deleteDish = async (id) => {
    const client = pool.connect();
    try {
        await client.query('BEGIN');

        const data = await getDish(id);
        const dish = await data.rows[0];
        if (!dish) {
            throw new CustomError(`Dish with id = ${id} not found`, 204);
        }
        await dishRepository.deleteDish(id);

        await client.query('COMMIT');
    }
    catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
};
