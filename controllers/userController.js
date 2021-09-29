import {userService} from '../services';

const findAllUsers = async () => {
  return await userService.findAllUsers();
};

const createUser = async (req, res) => {
  try {
    const { email, password, username, address, phone_number } = req.body;
    const create = await userService.createUser(email, password, username, address, phone_number);
    res.status(200).json({
      message: 'SUCCESS',
    })
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    return res.status(200).json({
      message : 'SUCCESS'
    })
  } catch (err) {
    console.log(err)
  }
};

export default { findAllUsers, createUser, loginUser };