import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
  res.statusCode = err.statusCode || 500;
  res.send(err.message);
});

export default app;
