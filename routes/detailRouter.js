import express from 'express';
import { detailController } from '../controllers';

const detailRouter = express.Router();

detailRouter.get('/', detailController.getDrinkList);
detailRouter.get('/:id', detailController.getDrinkDetail);

export default detailRouter;
