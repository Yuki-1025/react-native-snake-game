const express = require("express");
const db = require('../database');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(__dirname + "/../client/dist"));

app.get('/records', (req, res) => {
  db.getScore()
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    res.sendStatus(404);
  })
});

app.post('/records', (req, res) => {
  db.add(req.body)
  .then(() => {
    res.sendStatus(201);
  })
  .catch((err) => {
    res.sendStatus(404);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});