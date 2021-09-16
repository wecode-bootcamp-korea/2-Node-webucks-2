import prisma from '../prisma';
import express from 'express';

const app = express();

const userService = () => {
  app.post('/users', async (req, res) => {
    await prisma.$queryRaw`
    INSERT INTO users
      (id, email, password, username, address, phone_number) 
    VALUES 
      (1, 'goplanit19@gmail.com', 'aaaa1111!', '고원구', '구리시', '010-5558-8846'),
      (2, 'abc@gmail.com', 'aaaa1111!', '이은정', '구리시', '010-5558-8846'),
      (3, 'ddd@gmail.com', 'bbbb1111!', '한지훈', '서울시', '010-1234-5678'),
      (4, 'gee@gmail.com', 'cccc1111!', '김원영', '서울시', '010-4444-3333'),
      (5, 'www@gmail.com', 'dddd1111!', '이민재', '서울시', '010-2424-5555');
  `;

    const users = await prisma.$queryRaw`
    SELECT *
    FROM users;
  `;

    res.json(users);
  });
};

export default userService;
