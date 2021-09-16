import express from 'express';
import { detailController } from '../controllers';

const router = express.Router();

router.get('/detail', detailController);

export default router;
