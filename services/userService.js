import {
  getUsersModel,
  getUsersByEmailModel,
  createUserModel,
  getUserById,
} from '../models/userDao';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { ERROR } from '../utils/error';

dotenv.config();
const { COOKIE_SECRET } = process.env;
export const getUsersService = async () => {
  return await getUsersModel();
};

export const getUserByIdService = async id => {
  const userInfoById = await getUserById(id);
  return userInfoById;
};

export const getUsersByEmailService = async email => {
  const [userInfoByEmail] = await getUsersByEmailModel(email);
  return userInfoByEmail;
};

export const loginService = async (email, password) => {
  const user = await getUsersByEmailService(email);
  if (user) {
    const checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword) {
      return user;
    } else {
      throw new error(ERROR.WRONG_INPUT);
    }
  }
};

export const createToken = async user => {
  return new Promise((resolve, reject) => {
    jwt.sign({ id: user.id }, COOKIE_SECRET, (err, encoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(encoded);
      }
    });
  });
};

export const verifyToken = async token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, COOKIE_SECRET, (err, value) => {
      if (err) {
        reject(err);
      } else {
        resolve(value);
      }
    });
  });
};

export const createUserService = async (
  email,
  password,
  username,
  address,
  phoneNumber,
  policyAgreed
) => {
  const userInfo = await getUsersByEmailModel(email);
  const isUser = userInfo[0];

  if (!isUser) {
    const hash = await bcrypt.hash(password, 12);
    return await createUserModel(
      email,
      hash,
      username,
      address,
      phoneNumber,
      policyAgreed
    );
  }
};
