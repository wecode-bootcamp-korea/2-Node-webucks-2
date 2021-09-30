import express from 'express';
import categoryRouter from './categoryRouter';
import drinkRouter from './drinkRouter';
import userRouter from './userRouter';

const router = express.Router();

router.use('/categories', categoryRouter);
router.use('/drinks', drinkRouter);
router.use('/users', userRouter);

export default router;
