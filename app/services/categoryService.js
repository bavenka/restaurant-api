import * as categoryRepository from '../repositories/categoryRepository';

export const createCategory = (category) => categoryRepository.createCategory(category);

export const deleteCategory = ({id}) => categoryRepository.deleteCategory(id);