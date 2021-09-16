import express from 'express';
import dotenv from 'dotenv';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

dotenv.config();
const app = express();
const PORT = 8000 | process.env.PORT;


app.post('/categories', async (req, res) => {
  await prisma.$queryRaw`
    insert into categories (name)
    values ('콜드 브루');
    `;

    const [category] = await prisma.$queryRaw`
      SELECT c.id, c.name
      FROM categories c
      ORDER BY ID DESC
      LIMIT 1
      `;

    res.json(category);
});

app.post('/users', async (req, res) => {
  await prisma.$queryRaw`
    insert into users (email, password, username, address, phone_number)
    values 
      ('goplanit19@gmail.com', 'Goplanit19@', '고원구', '서울시', '010-1234-1111'),
      ('ablack1029@gmail.com', 'Ablack1029@', '김원영', '서울시', '010-1234-2222'),
      ('dlalswo4602@gmail.com', 'Dlalwso4602@', '이민재', '서울시', '010-1234-3333'),
      ('leecoder21@gamil.com', 'Leecoder21@', '이은정', '서울시', '010-1234-4444'),
      ('jihoonkr821@gmail.com', 'Jihoonkr821@', '한지훈', '서울시', '010-1234-5555')
    `;

    const [users] = await prisma.$queryRaw`
      SELECT *
      FROM users
      ORDER BY ID DESC
      LIMIT 6
      `;

    res.json(users);
});
      
app.get("/categories", async(req,res) => {
  const categories = await prisma.$queryRaw`
    SELECT c.id, c.name 
    FROM categories c 
    `;
  res.json(categories)
});

app.get("/products", async(req,res) => {
  const products = await prisma.$queryRaw`
  SELECT p.id, p.name, p.korean_name, p.english_name, p.categories_id
  FROM products p
  `;
  res.json(products)
});

app.get("/images", async(req,res) => {
  const images = await prisma.$queryRaw`
  SELECT i.id, i.image_url, i.products_id
  FROM images i
  `;
  res.json(images)
})

app.get("/allergies", async(req,res) => {
  const allergies = await prisma.$queryRaw`
  SELECT a.id, a.name
  FROM allergies a
  `;
  res.json(allergies)
})

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