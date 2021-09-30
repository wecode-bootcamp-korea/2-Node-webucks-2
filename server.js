import dotenv from 'dotenv';
import app from './app';
import prisma from 'prisma';

dotenv.config();
const PORT = 8000 | process.env.DATABASE_URL;

const start = async () => {
  try {
    await app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
  } catch (err) {
    console.log(err);
    prisma.$disconnect();
  }
};

start();
