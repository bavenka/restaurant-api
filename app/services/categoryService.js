import * as categoryRepository from '../repositories/categoryRepository';

export const createCategory = (category) => categoryRepository.createCategory(category);

export const getCategory = (id) => {
    const category = {
        id,
    };
    return categoryRepository.getCategory(category);
};

export const deleteCategory = async ({id}) => {
    try {
        const data = await getCategory(id);
        const category = await data.rows[0];
        if (!category) {
           throw new Error(`Category with id = ${id} not found`);
        }
        return categoryRepository.deleteCategory(id);
    }
    catch (e) {
        throw e;
    }
};