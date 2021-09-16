import express from 'express';
import listRouter from './listRouter';
import detailRouter from './detailRouter';
import userRouter from './userRouter';

const router = express.Router();

router.use('/list', listRouter);
router.use('/detail', detailRouter);
router.use('/user', userRouter);

export default router;
