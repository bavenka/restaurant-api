import pool from '../db/connection';

import * as categoryRepository from '../repositories/categoryRepository';
import CustomError from "../errors/custom-error";

export const createCategory = (category) => categoryRepository.createCategory(category);

export const getCategory = (id) => categoryRepository.getCategory(id);

export const updateCategory = async (category, id) => {
    const client = pool.connect();
    try {
        await client.query('BEGIN');

        const data = await getCategory(id);
        const category = await data.rows[0];
        if (!category) {
            throw new CustomError(`Category with id = ${id} not found`, 204);
        }
        const updatedCategory = await categoryRepository.updateCategory(category, id);

        await client.query('COMMIT');

        return updatedCategory;
    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
};

export const deleteCategory = async (id) => {
    const client = pool.connect();
    try {
        await client.query('BEGIN');

        const data = await getCategory(id);
        const category = await data.rows[0];
        if (!category) {
            throw new CustomError(`Category with id = ${id} not found`, 204);
        }
        await categoryRepository.deleteCategory(id);

        await client.query('COMMIT');
    }
    catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
};
