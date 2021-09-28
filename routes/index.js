import express from 'express';
import listRouter from './listRouter';
import detailRouter from './detailRouter';
import userRouter from './userRouter';

const router = express.Router();

router.use('/lists', listRouter);
router.use('/details', detailRouter);
router.use('/users', userRouter);

export default router;
