import { userService } from '../services';

const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
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

export default { getUsers, createUser };
