import { userDao } from '../models'
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const secretkey = process.env;

const createUser = async (email, password, username, address, phone_number) => {
  try {
    const hashPW = await bcrypt.hash(password, 10);
    return await userDao.createUser(
      email,
      hashPW,
      username, 
      address,
      phone_number
    );
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (email, password) => {
  try {
    const user = await userDao.loginUser(email,password)
    if (user) {
      const result = await bcrypt.compare(password, user.password);  
      if (result) {
        const token = jwt.sign({ id : email }, 'secretkey', { expiresIn : '1h'});
        return token;
      }
    } 
  } catch (err) {
    console.log(err);
  }
}

export default { createUser, loginUser };