const express = require('express');
const path = require('path');
const cards = require('./routes/cards.js');
const users = require('./routes/users.js');

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();

app.use('/', cards);
app.use('/', users);

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" });
})

app.listen(PORT, () => {
  console.log(`Сервер работает на порте ${PORT}`);
});