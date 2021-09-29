import express from "express";
import { userController } from "../controllers";
import getAllUsers from "../middlewares/auth";

const router = express.Router();

router.get('/get', getAllUsers);
router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser)

export default router;
