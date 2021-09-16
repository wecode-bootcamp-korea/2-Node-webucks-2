import prisma from '../prisma';
import express from 'express';

const app = express();

const nutritionService = () => {
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
};

export default nutritionService;
