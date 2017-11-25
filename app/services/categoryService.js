import pool from '../db/connection';

import * as categoryRepository from '../repositories/categoryRepository';
import CustomError from "../errors/custom-error";

export const createCategory = async (category) => {
    const client = await pool.connect();
    try {
        return await categoryRepository.createCategory(category, client);
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
};

export const getCategory = async (id) => {
    const client = await pool.connect();
    try {
        return await categoryRepository.getCategory(id, client);
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
};

export const updateCategory = async (category, id) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const data = await categoryRepository.getCategory(id, client);
        const existingCategory = await data.rows[0];
        if (!existingCategory) {
            throw new CustomError(`Category with id = ${id} not found`, 204);
        }
        const updatedCategory = await categoryRepository.updateCategory(category, id, client);

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
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const data = await categoryRepository.getCategory(id, client);
        const category = await data.rows[0];
        if (!category) {
            throw new CustomError(`Category with id = ${id} not found`, 204);
        }
        await categoryRepository.deleteCategory(id, client);

        await client.query('COMMIT');
    }
    catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
};
