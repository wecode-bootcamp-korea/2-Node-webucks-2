import dotenv from 'dotenv';
import http from 'http';
import app from './app';
import prisma from 'prisma';

dotenv.config();
const server = http.createServer(app);
const PORT = 8000 | process.env.DATABASE_URL;

app.listen(PORT, err => {
  try {
    console.log(`Server is running on ${PORT}`);
  } catch {
    console.log(err);
    await prisma.$disconnect();
  }
});
