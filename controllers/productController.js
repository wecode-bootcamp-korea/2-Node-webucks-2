import { productService } from '../services';

const findAllProducts = async (req, res) => {
  try {
    const products = await productService.findAllProducts();
    res.status(201).json({
      message: 'SUCCESS',
      data: products,
    });
  } catch (err) {
    console.log(err);
  }
};

const findAllProductsDetail = async (req, res) => {
  try {
    const productsDetail = await productService.findAllProductsDetail();
    res.status(201).json({
      message: 'SUCCESS',
      data: productsDetail,
    });
  } catch (err) {
    console.log(err);
  }
};

export default { findAllProducts, findAllProductsDetail };
