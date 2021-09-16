import prisma from '../prisma';
import express from 'express';

const app = express();

const categoryService = () => {
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
};

export default categoryService;
