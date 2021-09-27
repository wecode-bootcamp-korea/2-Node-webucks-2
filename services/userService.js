import { userDao } from '../models'

const findAllUsers = async () => {
  return await userDao.findAllUsers();
}

const createUser = async (username, email, password) => {
  return await userDao.createUser(username, email, password);
};

export default { findAllUsers, createUser};