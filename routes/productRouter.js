import express from 'express';
import { productController } from '../controllers';

const router = express.Router();

router.get('/', productController.findAllProducts);
router.get('/:id', productController.findAllProductsDetail);

export default router;
