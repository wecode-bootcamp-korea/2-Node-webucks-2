import { productService } from '../services';

const getProductList = async (req, res) => {
  const productList = await productService.getProductList();
  res.status(200).json({
    myProduct: productList,
  });
};

const getProductDetail = async (req, res) => {
  const productId = req.params.productId;
  const productDetail = await productService.getProductDetail(productId);
  res.status(200).json({
    myProduct: productDetail,
  });
};

export { getProductList, getProductDetail };
