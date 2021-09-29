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
    const { name, email, password } = req.body;
    await userService.createUser(name, email, password);
    res.status(201).json({
      message: 'CREATED',
    });
  } catch (err) {
    console.log(err);
  }
};

export { findAllUsers, createUser };
