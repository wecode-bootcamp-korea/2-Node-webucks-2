import { userDao } from '../models';
import bcrypt from 'bcryptjs';

const findAllUsers = async () => {
  return await userDao.findAllUsers();
};

const createUser = async (name, email, password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPw = await bcrypt.hash(password, salt);
  return await userDao.createUser(name, email, hashedPw);
};

export { findAllUsers, createUser };
