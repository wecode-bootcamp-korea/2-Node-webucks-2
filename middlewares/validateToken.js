import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { userService } from '../services';

dotenv.config();

const { secretkey } = process.env;

const validateToken = async (req, res, next) => {
  try {
    const { token } = req.headers.authorization;
    const { id } = jwt.verify(token, secretkey);
    const foundUser = await userService.login({ id });

    if (!foundUser) {
      errorGenerator({ statusCode: 404, message: 'USER_NOT_FOUND' });
    }
    req.foundUser = foundUser;
    next();
  } catch (err) {
    next(err);
  }
};

export default validateToken;
