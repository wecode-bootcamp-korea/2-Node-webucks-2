import express from 'express';
import router from './routes';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use('/', router);

app.use((err, req, res, next) => {
  const { status, message } = err;
  res.status(status || 500).json({ message });
});

export default app;
