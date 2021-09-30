import express from 'express';
import {
  createUserController,
  getUsersController,
  loginController,
  logoutController,
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/', getUsersController);
userRouter.post('/signup', createUserController);
userRouter.post('/login', loginController);
userRouter.get('/logout', logoutController);

export default userRouter;
