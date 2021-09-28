import express from 'express';
import { userController } from '../controllers';

const userRouter = express.Router();

userRouter.get('/', userController.getUsers);
userRouter.post('/signup', userController.createUser);
userRouter.post('/login', userController.login);

export default userRouter;
