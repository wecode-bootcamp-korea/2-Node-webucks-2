import exprescs from 'express';
import { userController } from '../controllers';

const router = express.Router();

router.post('/user', userController);

export default router;
