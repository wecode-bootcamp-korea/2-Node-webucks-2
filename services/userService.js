import { userDao } from '../models';

const getUsers = async () => {
  return await userDao.getUsers();
};

const createUser = async (
  email,
  password,
  username,
  address,
  phone_number,
  policy_agreed
) => {
  return await userDao.createUser(
    email,
    password,
    username,
    address,
    phone_number,
    policy_agreed
  );
};

export default { getUsers, createUser };
