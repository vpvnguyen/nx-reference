import * as express from 'express';

const PORT = process.env.port || 8080;

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express server!' });
});

app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}/api`)
);
