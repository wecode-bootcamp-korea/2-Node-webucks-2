import prisma from '../prisma';
import express from 'express';

const app = express();

const allergieService = () => {
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
};

export default allergieService;
