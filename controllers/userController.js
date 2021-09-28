import { userService } from '../services';

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json({
      message: 'SUCCESS',
      data: users,
    });
  } catch (err) {
    res.status(500).send('유저를 불러올 수 없습니다. 다시 시도해주세요.');
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.login(email, password);
    const token = await userService.createToken(user);
    if (!token) {
      res
        .status(401)
        .json('이메일 또는 비밀번호가 틀립니다. 다시 입력해주세요.');
    } else {
      res.cookie('user', token, {
        httpOnly: true,
        secure: false,
      });
      return res.status(201).json({
        message: '로그인 성공',
        token,
      });
    }
  } catch (error) {
    res.status(500).send('로그인 할 수 없습니다. 다시 입력해주세요.');
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password, username, address, phoneNumber, policyAgreed } =
      req.body;
    const signupUser = await userService.createUser(
      email,
      password,
      username,
      address,
      phoneNumber,
      policyAgreed
    );
    if (!signupUser) {
      res.status(401).json({
        message: '이미 가입된 이메일 주소입니다.',
      });
    }
    res.status(201).json({
      message: 'CREATED',
      user: signupUser,
    });
  } catch (err) {
    res.status(500).send('회원가입 할 수 없습니다. 다시 입력해주세요.');
  }
};

export default { getUsers, login, createUser };
