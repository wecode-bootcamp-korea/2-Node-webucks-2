import express from 'express';
import { productController } from '../controllers';

const router = express.Router();

router.get('/', productController.findAllProducts);
router.get('/detail', productController.findAllProductsDetail);

export default router;
