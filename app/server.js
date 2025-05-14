const express = require('express');
const connect = require('./db');
const app = express();
app.use(express.json());

app.post('/data', async (req, res) => {
  const db = await connect();
  const result = await db.collection('items').insertOne(req.body);
  res.send(result);
});

app.get('/data', async (req, res) => {
  const db = await connect();
  const items = await db.collection('items').find().toArray();
  res.send(items);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
