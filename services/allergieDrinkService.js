import prisma from '../prisma';
import express from 'express';

const app = express();

const allergieDrinkService = () => {
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
};

export default allergieDrinkService;
