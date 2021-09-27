import http from 'http';
import dotenv from 'dotenv';
import express from 'express';
import routes from './routes';


const app = express();
const PORT = 8000 | process.env.PORT ;

dotenv.config()
app.use(express.json());
app.use('/',routes);

app.use((err, req, res, next) => {
  const { status, message } = err;
  console.error(err)
  res.status(status || 500).json({message});
});

const server = http.createServer(app);

const start = async () => {
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};

start();