import {
  createToken,
  createUserService,
  getUsersService,
  loginService,
} from '../services/userService';
import { ERRORS } from '../utils/error';

export const getUsersController = async (req, res) => {
  const users = await getUsersService();
  try {
    res.status(200).json({
      message: 'SUCCESS',
      data: users,
    });
  } catch (err) {
    res.status(500).send(ERRORS.NO_USERS);
  }
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginService(email, password);
    const token = await createToken(user);
    if (!token) {
      res.status(401).send(ERRORS.WRONG_INPUT);
    } else {
      res.cookie('user', token, {
        httpOnly: true,
        secure: false,
      });
      return res.status(201).json({
        message: 'SUCCESS',
        token,
      });
    }
  } catch (error) {
    res.status(500).send(ERRORS.WRONG_INPUT);
  }
};

export const logoutController = async (req, res) => {
  res.clearCookie('user');
  res.redirect('/login');
};

export const createUserController = async (req, res) => {
  try {
    const { email, password, username, address, phoneNumber, policyAgreed } =
      req.body;
    const signupUser = await createUserService(
      email,
      password,
      username,
      address,
      phoneNumber,
      policyAgreed
    );
    res.status(201).json({
      message: 'CREATED',
      user: signupUser,
    });
  } catch (err) {
    res.status(500).send(ERRORS.EXIST_EMAIL);
  }
};
