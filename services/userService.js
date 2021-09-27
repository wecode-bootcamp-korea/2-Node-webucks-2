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
  const user = await userDao.login(email);
  const validPassword = await bcrypt.compare(password, user[0].password);
  if (validPassword) {
    return user;
  } else throw new error('invalid password');
};

const createToken = async user => {
  const token = jwt.sign({ email: user.email }, secretkey, { expiresIn: '1d' });
  return token;
};

const createUser = async (
  email,
  password,
  username,
  address,
  phone_number,
  policy_agreed
) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await userDao.createUser(
    email,
    hashedPassword,
    username,
    address,
    phone_number,
    policy_agreed
  );
};

export default { getUsers, login, createToken, createUser };
