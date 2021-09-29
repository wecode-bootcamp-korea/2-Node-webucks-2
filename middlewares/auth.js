import jwt from 'jsonwebtoken'
import prisma from '../prisma';

const getAllUsers = async (req, res, next) => {
  try {
    const usersToken = req.headers.cookie.split('=')[1];
    const decoded = await jwt.verify(usersToken, 'secretkey');
    if (decoded.id !== 'ddd@naver.com') {
      throw new Error('관리자만 볼 수 있음')
    }
    const allUsers = await prisma.$queryRaw`
    SELECT * FROM users
    `;
    res.json({
      status: 'success',
      allUsers,
    });
    next();
  } catch (err) {
    res.status(403).json({
      message: `Forbidden: ${err.message}`
    })
  }
}

export default getAllUsers;