import express from 'express';
import { listController } from '../controllers';

const listRouter = express.Router();

listRouter.get('/', listController.getCategory);
listRouter.get('/:id', listController.getCategoryById);

export default listRouter;
