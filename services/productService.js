import { productDao } from '../models';

const findAllProducts = async () => {
  return await productDao.findAllProducts();
};

const findAllProductsDetail = async () => {
  return await productDao.findAllProductsDetail();
};

export default { findAllProducts, findAllProductsDetail };
