import userDao from '../models/userDao';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

dotenv.config();
const { COOKIE_SECRET } = process.env;

const getUsers = async () => {
  return await userDao.getUsers();
};

const getUsersByEmail = async email => {
  const [userInfoByEmail] = await userDao.getUsersByEmail(email);
  return userInfoByEmail;
};

const login = async (email, password) => {
  const user = await userDao.getUsersByEmail(email);
  if (user) {
    const checkPassword = await bcrypt.compare(password, user[0].password);
    if (checkPassword) {
      return user;
    } else {
      throw new error('패스워드가 틀립니다. 다시 입력해주세요.');
    }
  }
};

const createToken = async user => {
  token = jwt.sign({ email: user.email }, COOKIE_SECRET, {
    algorithm: 'RS256',
    expiresIn: '3d',
  });
  return token;
};

const createUser = async userInfo => {
  const { email, password, username, address, phoneNumber, policyAgreed } =
    userInfo;
  const isUser = await getUsersByEmail(email, next);

  if (!isUser) {
    const hash = await bcrypt.hash(password, 12);
    return await userDao.createUser(
      email,
      password,
      username,
      address,
      phoneNumber,
      policyAgreed
    );
  }
};

export default { getUsers, login, createToken, createUser };
