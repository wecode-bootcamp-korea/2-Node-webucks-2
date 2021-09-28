import { listDao } from '../models';

const getCategory = async () => {
  const categoryList = await listDao.getCategory();
  return categoryList;
};

const getCategoryById = async id => {
  const [categoryById] = await listDao.getCategoryById(id);
  return categoryById;
};

export default { getCategory, getCategoryById };
