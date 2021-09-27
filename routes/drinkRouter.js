import express from 'express';
import { drinkController } from '../controllers/';

const drinkRouter = express.Router();

drinkRouter.get('/', drinkController.getDrinkList);
drinkRouter.get('/:id', drinkController.getDrinkDetail);

export default drinkRouter;
