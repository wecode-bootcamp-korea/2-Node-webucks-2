import { userService } from '../services';

const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.login(email.password);
    const token = await userService.createToken(user);
    if (!user) {
      res.status(401).json('please check email or password');
    } else {
      res.cooke('user', token);
      res.json(user);
    }
  } catch (error) {
    res.status(500).send('invalid user');
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

export default { getUsers, login, createUser };
