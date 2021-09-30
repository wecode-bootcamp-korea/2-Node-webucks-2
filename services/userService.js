import bcrypt from 'bcryptjs';
import { userDao } from '../models';

const findAllUsers = async () => {
  return await userDao.findAllUsers();
};

const createUser = async createUserData => {
  const { password } = createUserData;
  const hashPw = await bcrypt.hash(password, 10);
  createUserData.password = hashPw;
  return await userDao.createUser(createUserData);
};

export default {
  findAllUsers,
  createUser,
};
