import express from 'express';
import { listController } from '../controllers';

const router = express.Router();

router.get('/list', listController);

export default router;
