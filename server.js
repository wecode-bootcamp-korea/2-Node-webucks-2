import dotenv from 'dotenv';
import express from 'express';
import { PrismaClient } from './src/generated/client';

const prisma = new PrismaClient();

dotenv.config();
const app = express();
const PORT = 8000 | process.env.DATABASE_URL;

app.post('/categories', async (req, res) => {
  prisma.categories;
});

app.get('/', (req, res) => {
  res.send('S2팀');
});

app.listen(PORT, err => {
  try {
    console.log(`Server is running on ${PORT}`);
  } catch {
    console.log(err);
  }
});
