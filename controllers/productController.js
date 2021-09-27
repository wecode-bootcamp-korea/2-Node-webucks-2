import { productService } from '../services';

const findAllProducts = async (req, res) => {
  try {
    const products = await productService.findAllProducts();
    res.json(products);
  } catch {
    console.log(err);
  }
};

const findAllProductsDetail = async (req, res) => {
  try {
    const productsDetail = await productService.findAllProductsDetail();
    res.json(productsDetail);
  } catch {
    console.log(err);
  }
};

export default { findAllProducts, findAllProductsDetail };
