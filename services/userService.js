import { userDao } from '../models';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const secretkey = process.env.secretkey;

const getUsers = async () => {
  return await userDao.getUsers();
};

const login = async (email, password) => {
  const [user] = await userDao.login(email);
  console.log(user);
  if (user == undefined) {
    throw new Error('PLEASE_CHECK_EMAIL');
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword) {
    const token = jwt.sign({ id: user.email }, secretkey, {
      expiresIn: '1h',
    });
    return { user: user[0], token };
  } else {
    throw new Error('PLEASE_CHECK_PASSWORD');
  }
};

const signup = async userData => {
  const { email, password } = userData;
  const [userInfo] = await userDao.login(email);
  if (userInfo !== undefined) {
    throw new Error('EMAIL_ALREADY_TAKEN');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  userData.password = hashedPassword;
  return await userDao.signup(userData);
};

export default { getUsers, login, signup };
