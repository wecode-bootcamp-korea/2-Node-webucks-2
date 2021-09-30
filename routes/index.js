import express from 'express';
import userRouter from './userRouter';
import categoryRouter from './categoryRouter';
import productRouter from './productRouter';

const router = express.Router();

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/categories', categoryRouter);

export default router;
