import { categoryDao } from '../models';

const findAllCategories = async () => {
  return await categoryDao.findAllCategories();
};

export default { findAllCategories };
