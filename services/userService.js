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
  return await userDao.createUser(
    email,
    hashPw,
    username,
    address,
    phone_number,
    policy_agreed
  );
};

export default {
  findAllUsers,
  createUser,
};
