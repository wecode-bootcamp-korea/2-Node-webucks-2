import { productDao } from '../models';

const findAllProducts = async () => {
  return await productDao.findAllProducts();
};

const findAllProductsDetail = async id => {
  return await productDao.findAllProductsDetail(id);
};

export default { findAllProducts, findAllProductsDetail };
