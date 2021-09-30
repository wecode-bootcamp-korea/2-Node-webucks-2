import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();
const app = express();

app.use(express.json());
app.use(router);

const server = http.createServer(app);
const PORT = process.env.PORT;
const start = async () => {
  try {
    server.listen(PORT, () => console.log(`Sever is running on ${PORT}.`));
  } catch (err) {
    console.log(err);
  }
};

start();

app.get('/', (req, res) => {
  res.send('S2팀');
});
