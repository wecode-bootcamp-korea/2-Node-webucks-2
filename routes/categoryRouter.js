import express from 'express';
import { categoryController } from '../controllers';

const categoryRouter = express.Router();

categoryRouter.get('/', categoryController.getCategoryList);

export default categoryRouter;
