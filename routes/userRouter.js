import express from 'express';
import { userController } from '../controllers';
const userRouter = express.Router();

userRouter.get('/', userController.getUsers);
userRouter.post('/login', userController.login);
userRouter.post('/signup', userController.signup);

export default userRouter;
