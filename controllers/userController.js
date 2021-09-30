import { userService } from '../services';

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(201).json({ message: 'SUCCESS', data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'GET_USER_ERROR' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    await userService.login(email, password);
    res.status(201).json({ message: 'LOGIN_SUCCESS' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message || 'LOGIN_FAILED' });
  }
};

const signup = async (req, res) => {
  try {
    const userData = req.body;
    await userService.signup(userData);
    res.status(201).json({ message: 'CREATED' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message || 'SIGN_UP_FAILED' });
  }
};

export default { getUsers, login, signup };
