import dotenv from 'dotenv';
import express from 'express';
import { PrismaClient } from './src/generated/client';

const prisma = new PrismaClient();

dotenv.config();
const app = express();
const PORT = 8000 | process.env.DATABASE_URL;

app.post('/categories', async (req, res) => {
  await prisma.$queryRaw`
    INSERT INTO categories 
      (id, name) 
    VALUES 
      (1,'콜드 브루'),
      (2,'브루드 커피'),
      (3,'에스프레소'),
      (4,'프라푸치노'),
      (5,'블렌디드'),
      (6,'스타벅스 피지오'),
      (7,'티(티바나)'),
      (8,'기타 제조 음료'),
      (9,'스타벅스 주스(병음료)'),
      (10,'케이크');
  `;

  const category = await prisma.$queryRaw`
    SELECT *
    FROM categories;
  `;

  res.json(category);
});

app.post('/drinks', async (req, res) => {
  await prisma.$queryRaw`
    INSERT INTO drinks 
      (id, category_id, korean_name, english_name, description, is_new) 
    VALUES 
      (1,1,'시그니처 더 블랙 콜드 브루','Signature The Black Cold Brew','콜드 브루 전용 원두를 차가운 물로 14시간 동안 추출하여 부드럽고 진한 풍미의 콜드브루를 딜리버리로 원하는 곳에서 편하게 즐겨보세요 (전용 리유저블 보틀 /500ml),1),
      (2,1,'나이트로 바닐라 크림','Nitro Vanilla Cream','부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!',0),
      (3,1,'나이트로 콜드 브루','Nitro Cold Brew','나이트로 커피 정통의 캐스케이딩과 부드러운 콜드 크레마! 부드러운 목 넘김과 완벽한 밸런스에 커피 본연의 단맛을 경험할 수 있습니다.',0),
      (4,1,'돌체 콜드 브루','Dolce Cold Brew','무더운 여름철, 동남아 휴가지에서 즐기는 커피를 떠오르게 하는 스타벅스 음료의 베스트 x 베스트 조합인 돌체 콜드 브루를 만나보세요!',0),
      (5,1,'바닐라 크림 콜드 브루','Vanilla Cream Cold Brew','콜드 브루에 더해진 바닐라 크림으로 깔끔하면서 달콤한 콜드 브루를 새롭게 즐길 수 있는 음료입니다.',0),
      (6,1,'벨벳 다크 모카 나이트로','Velvet Dark Mocha Nitro','다크 초콜릿 모카의 진한 바디감과 함께 헤이즐넛 향과 달콤한 카라멜 크림 폼으로 벨벳같은 부드러움까지 살린 리저브 나이트로 커피.',0),
      (7,1,'제주 비자림 콜드 브루','Jeju Forest Cold Brew','[제주지역 한정음료] 제주 천년의 숲 비자림을 연상시키는 음료로 제주에서 유기농 말차로 만든 파우더와 Cold Brew를 활용한 음료.',0),
      (8,1,'콜드 브루','Cold Brew','스타벅스 바리스타의 정성으로 탄생한 콜드 브루!  콜드 브루 전용 원두를 차가운 물로 14시간 동안 추출하여 한정된 양만 제공됩니다. 깊은 풍미의 새로운 커피 경험을 즐겨보세요.',0),
      (9,1,'콜드 브루 몰트','Cold Brew Malt','[리저브 전용음료] 리저브 콜드 브루, 바닐라 아이스크림, 몰트가 블렌딩된 리저브만의 쉐이크',0),
      (10,1,'콜드 브루 오트 라떼','Cold Brew Oat Latte','콜드 브루의 풍미와 깔끔한 오트 밀크가 어우러진 달콤 고소한 라떼. 식물성 밀크를 사용해 모든 고객이 부담없이 즐길 수 있는 콜드 브루 음료.',0),
      (11,1,'콜드 브루 플로트','Cold Brew Float','[리저브 전용음료] 리저브 콜드 브루 위에 녹아 내리는 한 스쿱의 바닐라 아이스크림',0),
      (12,1,'프렌치 애플 타르트 나이트로','French Apple Tarte Nitro','카라멜향을 머금은 애플의 달콤함과 부드러운 콜드 크레마를 조화롭게 느낄 수 있는 리저브 나이트로 음료',0);
  `;

  const drink = await prisma.$queryRaw`
    SELECT *
    FROM drinks
  `;

  res.json(drink);
});

app.post('/images', async (req, res) => {
  await prisma.$queryRaw`
    INSERT INTO images 
      (id, drink_id, image_url) 
    VALUES 
      (1,1,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346176.jpg'),
      (2,2,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg'),
      (3,3,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg'),
      (4,4,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg'),
      (5,5,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg'),
      (6,6,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg'),
      (7,7,'https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg'),
      (8,8,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg'),
      (9,9,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg'),
      (10,10,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg'),
      (11,11,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236748.jpg'),
      (12,12,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003507]_20210322093414289.jpg');
  `;

  const image = await prisma.$queryRaw`
    SELECT *
    FROM images;
  `;

  res.json(image);
});

app.post('/nutrition', async (req, res) => {
  await prisma.$queryRaw`
    INSERT INTO nutrition 
      (id, drink_id, calorie, natrium, fat, sugar, protein, caffeine) 
    VALUES 
      (1,1,25,50,0,0,0,680),
      (2,2,75,20,2,10,1,245),
      (3,3,5,5,0,0,0,245),
      (4,4,265,115,9,29,8,150),
      (5,5,125,58,6,11,3,150),
      (6,6,150,15,6,17,2,160),
      (7,7,340,115,8,44,10,105),
      (8,8,5,11,0,0,0,150),
      (9,9,510,147.8,20,40,10,150),
      (10,10,105,95,0.3,11,1,65),
      (11,11,230,69,10,18,3,150),
      (12,12,80,0,0,19,0,145);
  `;

  const nutrition = await prisma.$queryRaw`
    SELECT *
    FROM nutrition;
  `;

  res.json(nutrition);
});

app.get('/drinks/:id', async (req, res) => {
  const { id } = req.params;

  const [drinks] = await prisma.$queryRaw`
    SELECT d.id, d.korean_name, d.english_name, d.description FROM drinks d
    WHERE d.id = ${id}
  `;

  res.json(drinks);
});

app.post('/allergies', async (req, res) => {
  await prisma.$queryRaw`
    INSERT INTO allergies 
      (id, name) 
    VALUES 
      (1,''),(2,'우유'),(3,''),(4,'우유'),(5,'우유'),(6,'우유'),(7,''),(8,''),(9,'대두, 우유'),(10,''),(11,'우유'),(12,'');
  `;

  const allergies = await prisma.$queryRaw`
    SELECT *
    FROM allergies;
  `;

  res.json(allergies);
});

app.post('/allergies_drinks', async (req, res) => {
  await prisma.$queryRaw`
    INSERT INTO allergies_drinks 
      (id, allergie_id, drink_id) 
    VALUES 
      (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5),(6,6,6),(7,7,7),(8,8,8),(9,9,9),(10,10,10),(11,11,11),(12,12,12);
  `;

  const allergies_drinks = await prisma.$queryRaw`
    SELECT *
    FROM allergies_drinks;
  `;

  res.json(allergies_drinks);
});

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

app.listen(PORT, err => {
  try {
    console.log(`Server is running on ${PORT}`);
  } catch {
    console.log(err);
  }
});
