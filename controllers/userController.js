import {userService} from '../services';

const findAllUsers = async ( req, res) => {
  try {
    const users = await userService.findAllUsers();
    res.status(201).json({
      message : 'success',
      data: users,
    });
  } catch (err) {
    console.log(err);
  }
};

const createUser = async(req, res) => {
  try {
    const { username, email, password} = req.body;
    await userService.createUser(username, email, password);
    res.status(201).json({
      message : 'created',
    });
  } catch (err) {
    console.log(err);
  }
};

export default { findAllUsers, createUser};