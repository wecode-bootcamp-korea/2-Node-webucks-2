import {userService} from '../services';

const createUser = async (req, res) => {
  try {
    const { email, password, username, address, phone_number } = req.body;
    const create = await userService.createUser(email, password, username, address, phone_number);
    res.status(200).json({
      message: 'SUCCESS',
      email,
    })
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    const token = await userService.loginUser(email, password);
    res.cookie('jwt', token, { httpOnly: true });
    res.status(200).json({
      id : email,
      token,
    });
  } catch (err) {
    console.log(err)
  }
};

export default { createUser, loginUser };