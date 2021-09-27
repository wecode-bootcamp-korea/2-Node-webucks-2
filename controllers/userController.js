import { userService } from '../services';

const findAllUsers = async (req, res) => {
  try {
    const users = await userService.findAllUsers();
    res.status(201).json({
      message: 'SUCCESS',
      data: users,
    });
  } catch {
    console.log(err);
  }
};

const createUser = async (req, res) => {
  const { email, password, username, address, phone_number, policy_agreed } =
    req.body;
  await userService.createUser(
    email,
    password,
    username,
    address,
    phone_number,
    policy_agreed
  );
  res.status(201).json({
    message: 'CREATED',
  });
};

export default {
  findAllUsers,
  createUser,
};
