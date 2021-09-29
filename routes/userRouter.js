import express from "express";
import { userController } from "../controllers";

const router = express.Router();

router.get('/get', userController.findAllUsers);
router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser)

export default router;
