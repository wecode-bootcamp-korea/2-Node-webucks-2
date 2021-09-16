import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

dotenv.config();
const app = express();
const PORT = 8000 | process.env.PORT;

app.post('/categories', async (req, res) => {
  await prisma.$queryRaw`
    INSERT INTO categories (name)
    VALUES ('콜드브루'), ('브루드');
  `;

  const [category] = await prisma.$queryRaw`
  SELECT c.id, c.name
  FROM categories c
  ORDER BY id DESC
  LIMIT 1
  `;

  res.json(category);
});

app.get('/categories', async (req, res) => {
  const categories = await prisma.$queryRaw`
  SELECT c.id, c.name
  FROM categories c
  `;
  res.json(categories);
});

app.post('/products', async (req, res) => {
  await prisma.$queryRaw`
    INSERT INTO products (category_id, korean_name, english_name, description)
    VALUES
    (1,'나이트로 바닐라 크림','Nitro Vanilla Cream','부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!'),
    (1,'나이트로 콜드 브루','Nitro Cold Brew','나이트로 커피 정통의 캐스케이딩과 부드러운 콜드 크레마! 부드러운 목넘김과 완벽한 밸런스에 커피 본연의 단맛을 경험할 수 있습니다.'),
    (1,'돌체 콜드 브루','Dolce Cold Brew','무더운 여름철, 동남아 휴가지에서 즐기는 커피를 떠오르게 하는 스타벅스 음료의 베스트 x 베스트 조합인 돌체 콜드 브루를 만나보세요!'),
    (1,'바닐라 크림 콜드 브루','Vanilla Cream Cold Brew','콜드 브루에 더해진 바닐라 크림으로 깔끔하면서 달콤한 콜드 브루를 새롭게 즐길 수 있는 음료입니다.'),
    (1,'벨벳 다크 모카 나이트로','Velvet Dark Mocha Nitro','다크 초콜릿 모카의 진한 바디감과 함께 헤이즐넛 향과 달콤한 카라멜 크림 폼으로 벨벳 같은 부드러움까지 살린 리저브 나이트로 커피.'),
    (1,'콜드 브루','Cold Brew','스타벅스 바리스타의 정성으로 탄생한 콜드 브루! 콜드 브루 전용 원두를 차가운 물로 14시간 동안 추출하여 한정된 양만 제공됩니다. 깊은 풍미의 새로운 커피 경험을 즐겨보세요.'),
    (1,'콜드 브루 몰트','Cold Brew Malt','[리저브드 전용음료] 리저브 콜드 브루, 바닐라 아이스크림, 몰트가 블렌딩된 리저브만의 쉐이크.'),
    (1,'시그니처 더 블랙 콜드 브루','Signature The Black Cold Brew','콜드 브루 전용 원두를 차가운 물로 14시간 동안 추출하여 부드럽고 진한 풍미의 콜드브루를 딜리버리로 원하는 곳에서 편하게 즐겨보세요'),
    (2,'아이스 커피','Iced Coffee','깔끔하고 상큼함이 특징인 시원한 아이스 커피'),
    (2,'오늘의 커피','Brewed Coffee','신선하게 브루드(brewed)되어 원두의 다양함이 살아있는 커피');
  `;

  const [product] = await prisma.$queryRaw`
  SELECT p.id, p.category_id, p.korean_name, p.english_name, p.description
  FROM products p
  ORDER BY id DESC
  LIMIT 1
  `;

  res.json(product);
});

app.get('/products', async (req, res) => {
  const products = await prisma.$queryRaw`
  SELECT p.id, p.category_id, p.korean_name, p.english_name, p.description
  FROM products p
  `;
  res.json(products);
});

app.post('/images', async (req, res) => {
  await prisma.$queryRaw`
    INSERT INTO images (product_id, image_url)
    VALUES
    (1,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745609.jpg'),
    (2,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091844065.jpg'),
    (3,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133657016.jpg'),
    (4,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319174.jpg'),
    (5,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452556.jpg'),
    (6,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202595.jpg'),
    (7,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600541.jpg'),
    (8,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346334.jpg'),
    (9,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852999.jpg'),
    (10,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934246.jpg');
  `;

  const [image] = await prisma.$queryRaw`
  SELECT i.id, i.product_id, i.image_url
  FROM images i
  ORDER BY id DESC
  LIMIT 1
  `;

  res.json(image);
});

app.get('/images', async (req, res) => {
  const images = await prisma.$queryRaw`
  SELECT i.id, i.product_id, i.image_url
  FROM images i
  `;
  res.json(images);
});

app.post('/allergies', async (req, res) => {
  await prisma.$queryRaw`
    INSERT INTO allergies (name)
    VALUES ('우유'), ('대두');
  `;

  const [allergy] = await prisma.$queryRaw`
  SELECT a.id, a.name
  FROM allergies a
  ORDER BY id DESC
  LIMIT 1
  `;

  res.json(allergy);
});

app.get('/allergies', async (req, res) => {
  const allergies = await prisma.$queryRaw`
  SELECT a.id, a.name
  FROM allergies a
  `;
  res.json(allergies);
});

app.post('/products_allergies', async (req, res) => {
  await prisma.$queryRaw`
    INSERT INTO products_allergies (product_id, allergy_id)
    VALUES (1, 1), (3, 1), (4, 1), (7, 1), (7, 2);
  `;

  const [product_allergy] = await prisma.$queryRaw`
  SELECT t.id, t.product_id, t.allergy_id
  FROM products_allergies t
  ORDER BY id DESC
  LIMIT 1
  `;

  res.json(product_allergy);
});

app.get('/products_allergies', async (req, res) => {
  const products_allergies = await prisma.$queryRaw`
  SELECT t.id, t.product_id, t.allergy_id
  FROM products_allergies t
  `;
  res.json(products_allergies);
});

app.post('/nutritions', async (req, res) => {
  await prisma.$queryRaw`
    INSERT INTO nutritions (product_id, amount, calories, fat, protein, sodium, sugars, caffeine)
    VALUES ('1', 'Tall(톨) / 355ml (12 fl oz)', 75, 2, 1, 20, 10, 245),
    ('2', 'Tall(톨) / 355ml (12 fl oz)', 5, 0, 0, 5, 0, 245),
    ('3', 'Tall(톨) / 355ml (12 fl oz)', 265, 9, 8, 115, 29, 150),
    ('4', 'Tall(톨) / 355ml (12 fl oz)', 125, 6, 3, 58, 11, 150),
    ('5', 'Tall(톨) / 355ml (12 fl oz)', 150, 6, 2, 15, 17, 160),
    ('6', 'Tall(톨) / 355ml (12 fl oz)', 5, 0, 0, 11, 0, 150),
    ('7', 'Tall(톨) / 355ml (12 fl oz)', 510, 20, 10, 147.8, 40, 150),
    ('8', 'Bottle(보틀) / 500ml (17 fl oz)', 25, 0, 0, 50, 0, 680),
    ('9', 'Tall(톨) / 355ml (12 fl oz)', 5, 0, 0, 10, 0, 140),
    ('10', 'Tall(톨) / 355ml (12 fl oz)', 5, 0, 0, 10, 0, 260)
  `;

  const [nutrition] = await prisma.$queryRaw`
  SELECT n.id, n.product_id, n.amount, n.calories, n.fat, n.protein, n.sodium, n.sugars, n.caffeine
  FROM nutritions n
  ORDER BY id DESC
  LIMIT 1
  `;

  res.json(nutrition);
});

app.get('/nutritions', async (req, res) => {
  const nutritions = await prisma.$queryRaw`
  SELECT n.id, n.product_id, n.amount, n.calories, n.fat, n.protein, n.sodium, n.sugars, n.caffeine
  FROM nutritions n
  `;
  res.json(nutritions);
});

app.post('/users', async (req, res) => {
  await prisma.$queryRaw`
  INSERT INTO users (email, password, username, address, phone_number, policy_agreed)
  VALUES
  ('goplanit19@gmail.com', 'Goplanit19@', '고원구', '', '', 1),
  ('ablack1029@gmail.com', 'Ablack1029@', '김원영', '', '', 1),
  ('dlalswo4602@gmail.com', 'Dlalwso4602@', '이민재', '', '', 1),
  ('leecoder21@gamil.com', 'Leecoder21@', '이은정', '', '', 1),
  ('jihoonkr821@gmail.com', 'Jihoonkr821@', '한지훈', '', '', 1)
  `;
  const [user] = await prisma.$queryRaw`
  SELECT u.id, u.email, u.password, u.username, u.address, u.phone_number, u.policy_agreed
  FROM users u
  ORDER BY id DESC
  LIMIT 1
  `;

  res.json(user);
});

app.get('/users', async (req, res) => {
  const users = await prisma.$queryRaw`
  SELECT u.id, u.email, u.password, u.username, u.address, u.phone_number, u.policy_agreed
  FROM users u
  `;
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
