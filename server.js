import express from 'express';
import dotenv from 'dotenv';
import router from './routes/userRouter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

dotenv.config();
const app = express();
const PORT = 8000 | process.env.PORT;

app.get('/categories', async (req, res) => {
  const allCategories = await prisma.$queryRaw`
  SELECT 
    c.id, 
    c.name
  FROM 
    categories c
  `;

  res.json(allCategories);
});

app.get('/products', async (req, res) => {
  const allProducts = await prisma.$queryRaw`
    SELECT 
      p.id, 
      p.korean_name, 
      p.english_name, 
      p.description, 
      p.categories_id
    FROM 
      products p
  `;

  res.json(allProducts);
});

app.get('/productsDetail', async (req, res) => {
  const productsDetail = await prisma.$queryRaw`
    SELECT 
      p.english_name, 
      p.korean_name, 
      p.description, 
      i.image_url, 
      n.caffeine, 
      n.fat, 
      n.kcal, 
      n.natrium, 
      n.protein, 
      n.sugar
    FROM 
      products p 
    LEFT JOIN
     images i 
    ON
     p.id=i.product_id 
    LEFT JOIN
     nutritions n on p.id=n.product_id
  `;

  res.json(productsDetail);
});
app.use(express.json());
app.use(router);

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
