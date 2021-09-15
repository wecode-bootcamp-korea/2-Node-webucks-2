import express from 'express';
import dotenv from 'dotenv';
//dotenv??????/
const app = express();
const PORT = 8000 | process.env.PORT;

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
