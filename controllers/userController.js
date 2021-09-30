import { userService } from '../services';

const findAllUsers = async (req, res) => {
  try {
    const users = await userService.findAllUsers();
    res.status(201).json({
      message: 'SUCCESS',
      data: users,
    });
  } catch (err) {
    console.log(err);
  }
};

const createUser = async (req, res) => {
  try {
    const createUserData = req.body;
    await userService.createUser(createUserData);
    res.status(200).json({
      message: 'SUCCESS',
    });
  } catch (err) {
    res.status(404).json({
      message: 'FAILED',
    });
  }
};

export default {
  findAllUsers,
  createUser,
};
