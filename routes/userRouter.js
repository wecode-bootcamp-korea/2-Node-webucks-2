import express from "express";
import { userController } from "../controllers";

const router = express.Router();

router.get('/find', userController.findAllUsers);
router.post('/users', userController.createUser);


export default router;