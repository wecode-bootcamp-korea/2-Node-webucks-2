import express from 'express';
import { userController } from '../controllers';
const router = express.Router();

router.get('/users', userController.findAllUsers);
router.post('/users', userController.createUser);

export default router;
