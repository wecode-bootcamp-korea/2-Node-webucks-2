import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index';

dotenv.config();

const app = express();
const PORT = 8000 | process.env.PORT;

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.send('S2 gotcha');
});

app.listen(PORT, err => {
  try {
    console.log(`Server is running on ${PORT}`);
  } catch {
    console.log(err);
  }
});
