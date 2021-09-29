import express from "express";
const router = express.Router()

// import productRouter from './productRouter'
import userRouter from './userRouter.js'

// router.use('.products', productRouter);
router.use('/users', userRouter);

export default router;


