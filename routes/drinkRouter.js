import express from 'express';
import { drinkController } from '../controllers/';

const drinkRouter = express.Router();

drinkRouter.get('/', drinkController.getDrinkList);
drinkRouter.get('/detail', drinkController.getDrinkDetail);
drinkRouter.get('/detail/:id', drinkController.getDrinkDetailById);

export default drinkRouter;
