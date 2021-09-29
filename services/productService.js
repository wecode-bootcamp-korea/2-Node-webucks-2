import { productDao } from '../models';

const getProductList = async () => {
  const productList = await productDao.getProductList();
  return productList;
};

const getProductDetail = async prouctId => {
  const productDetail = await productDao.getProductDetail(prouctId);
  return productDetail;
};

export { getProductList, getProductDetail };
