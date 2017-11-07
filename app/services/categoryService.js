import * as categoryRepository from '../repositories/categoryRepository';
import CustomError from "../errors/custom-error";

export const createCategory = (category) => categoryRepository.createCategory(category);

export const getCategory = (id) => categoryRepository.getCategory(id);

export const deleteCategory = async (id) => {
    try {
        const data = await getCategory(id);
        const category = await data.rows[0];
        if (!category) {
            throw new CustomError(`Category with id = ${id} not found`, 204);
        }
        return categoryRepository.deleteCategory(id);
    }
    catch (e) {
        throw e;
    }
};