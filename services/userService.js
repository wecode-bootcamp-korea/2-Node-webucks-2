import { userDao } from '../models'
import bcrypt from 'bcrypt';



const findAllUsers = async (req, res) => {
  try {
    const users = await userDao.findAllUsers();
    res.status(201).json({
      message : 'success',
      users,
    });
  } catch (err) {
    console.log(err);
  } 
};

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



export default { findAllUsers, createUser};