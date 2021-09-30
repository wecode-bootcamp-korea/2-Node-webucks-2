import express from 'express';
import {
  getCategoryByIdController,
  getCategoryController,
} from '../controllers/listController';

const listRouter = express.Router();

listRouter.get('/', getCategoryController);
listRouter.get('/:id', getCategoryByIdController);

export default listRouter;
