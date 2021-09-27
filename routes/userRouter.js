import express from 'express';
import { userController } from '../controllers';

const userRouter = express.Router();

userRouter.get('/', userController.getUsers);
userRouter.post('/login', userController.login);
userRouter.post('/create-user', userController.createUser);

export default userRouter;
