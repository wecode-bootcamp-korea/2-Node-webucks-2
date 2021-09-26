import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

dotenv.config();
const app = express();
const PORT = 8000 | process.env.PORT;

app.post('/categories', async (req, res) => {
  const categories = await prisma.$queryRaw`
  INSERT INTO categories (name)
  VALUES ("콜드 브루 커피"),
  ("브루드 커피")
  `;

  res.json(categories);
});

app.post('/products', async (req, res) => {
  const products = await prisma.$queryRaw`
  INSERT INTO products (name, korean_name, english_name, categories_id)
  VALUES 
  ("시그니처 더 블랙 콜드 브루", "시그니처 더 블랙 콜드 브루", "Signature The Black Cold Brew", 1),
  ("나이트로 바닐라 크림", "나이트로 바닐라 크림", "Nitro Vanilla Cream", 1),
  ("나이트로 콜드 브루", "나이트로 콜드 브루", "Nitro Cold Brew", 1),
  ("돌체 콜드 브루", "돌체 콜드 브루", "Dolce Cold Brew", 1),
  ("바닐라 크림 콜드 브루", "바닐라 크림 콜드 브루", "Vanilla Cream Cold Brew", 1),
  ("벨벳 다크 모카 나이트로", "벨벳 다크 모카 나이트로", "Velvet Dark Mocha Nitro", 1),
  ("제주 비자림 콜드 브루", "제주 비자림 콜드 브루", "Jeju Forest Cold Brew", 1),
  ("콜드 브루", "콜드 브루", "Cold Brew", 1),
  ("콜드 브루 몰트", "콜드 브루 몰트", "Cold Brew Malt", 1),
  ("콜드 브루 오트 라떼", "콜드 브루 오트 라떼", "Cold Brew Oat Latte", 1),
  ("콜드 브루 플로트", "콜드 브루 플로트", "Cold Brew Float", 1),
  ("프렌치 애플 타르트 나이트로", "프렌치 애플 타르트 나이트로", "French Apple Tarte Nitro", 1),
  ("아이스 커피", "아이스 커피", "Iced Coffee", 2),
  ("오늘의 커피", "오늘의 커피", "Brewed Coffee", 2)
  `;

  res.json(products);
});

app.post('/allergies', async (req, res) => {
  const allergies = await prisma.$queryRaw`
  INSERT INTO allergies (name)
  VALUES("대두"),
        ("우유"),
        ("대두 우유")`;

  res.json(allergies);
});

app.post('/product_allergies', async (req, res) => {
  const product_allergies = await prisma.$queryRaw`
  INSERT INTO product_allergies (allergies_id, product_id)
  VALUES (2, 2),
  (2, 4),
  (2, 5),
  (2, 6),
  (3, 9),
  (2, 11)
  `;

  res.json(product_allergies);
});

app.post('/images', async (req, res) => {
  const images = await prisma.$queryRaw`
  INSERT INTO images (image_url, product_id)
  VALUES
  ("https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346176.jpg", 1),
  ("https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg", 2),
  ("https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg", 3),
  ("https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg", 4),
  ("https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg", 5),
  ("https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg", 6),
  ("https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg", 7),
  ("https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg", 8),
  ("https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg", 9),
  ("https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg", 10),
  ("https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236748.jpg", 11),
  ("https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003507]_20210322093414289.jpg", 12),
  ("https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg", 13),
  ("https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg", 14)
  `;

  res.json(images);
});

app.post('/nutritions', async (req, res) => {
  const nutritions = await prisma.$queryRaw`
  INSERT INTO nutritions (product_id, calories, fat, protein, natrium, sugars, caffeine)
  VALUES
  (1, 25, 0, 0, 50, 0, 680),
  (2, 75, 2, 1, 20, 10, 245),
  (3, 5, 0, 0, 5, 0, 245),
  (4, 265, 9, 8, 115, 29, 150),
  (5, 125, 6, 3, 58, 11, 150),
  (6, 150, 6, 2, 15, 17, 160),
  (7, 340, 8, 10, 115, 44, 105),
  (8, 5, 0, 0, 11, 0, 150),
  (9, 510, 20, 10, 147.8, 40, 150),
  (10, 105, 0.3, 1, 95, 11, 65),
  (11, 230, 10, 3, 69, 18, 150),
  (12, 80, 0, 0, 0, 19, 145),
  (13, 5, 0, 0, 10, 0, 140),
  (14, 5, 0, 0, 10, 0, 260)
  ;`;

  res.json(nutritions);
});

app.post('/users', async (req, res) => {
  const users = await prisma.$queryRaw`
  INSERT INTO users (email, password, username, address, phone_number, policy_agreed)
  VALUES 
  ('goplanit19@gmail.com', 'Goplanit19@', '고원구', '위코드시', '010', 1),
  ('ablack1029@gmail.com', 'Ablack1029@', '김원영', '위코드시', '010', 1),
  ('dlalswo4602@gmail.com', 'Dlalwso4602@', '이민재', '위코드시', '010', 1),
  ('leecoder21@gamil.com', 'Leecoder21@', '이은정', '위코드시', '010', 1),
  ('jihoonkr821@gmail.com', 'Jihoonkr821@', '한지훈', '위코드시', '010', 1)`;

  res.json(users);
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
