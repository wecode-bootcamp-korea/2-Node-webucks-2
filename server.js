import express from 'express';

const app = express();
const PORT = 3306 | process.env.PORT;

app.get('/', (req, res) => {
  res.send('2팀');
});

app.listen(PORT, err => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});
