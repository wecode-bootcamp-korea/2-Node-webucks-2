import { getCategoryModel, getCategoryByIdModel } from '../models/listDao';

export const getCategoryService = async () => {
  const categoryList = await getCategoryModel();
  return categoryList;
};

export const getCategoryByIdService = async id => {
  const categoryById = await getCategoryByIdModel(id);
  return categoryById;
};
