import { productService } from '../services';

const findAllProducts = async (req, res) => {
  try {
    const products = await productService.findAllProducts();
    res.status(200).json({
      message: 'SUCCESS',
      data: products,
    });
  } catch {
    res.status(404).json({
      message: 'FAILED',
    });
  }
};

const findAllProductsDetail = async (req, res) => {
  try {
    const productsDetailData = Number(req.params.id);
    const productsDetail = await productService.findAllProductsDetail(
      productsDetailData
    );
    res.status(200).json({
      message: 'SUCCESS',
      data: productsDetail,
    });
  } catch {
    res.status(404).json({
      message: 'FAILED',
    });
  }
};

export default { findAllProducts, findAllProductsDetail };
