import bcrypt from 'bcryptjs';
import { userDao } from '../models';

const findAllUsers = async () => {
  return await userDao.findAllUsers();
};

const createUser = async (
  email,
  password,
  username,
  address,
  phone_number,
  policy_agreed
) => {
  const hashPw = await bcrypt.hash(password, 10);
  const createUserData = {
    email,
    hashPw,
    username,
    address,
    phone_number,
    policy_agreed,
  };
  return await userDao.createUser(createUserData);
};

export default {
  findAllUsers,
  createUser,
};
