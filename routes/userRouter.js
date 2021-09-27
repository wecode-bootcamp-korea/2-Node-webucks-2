import express from 'express';
import { userController } from '../controllers';

const userRouter = express.Router();

userRouter.get('/', userController.getUsers);
userRouter.post('/', userController.createUser);

export default userRouter;
