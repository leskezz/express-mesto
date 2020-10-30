const express = require('express');
const path = require('path');
const cardsRouter = require('./routes/cards.js');
const usersRouter = require('./routes/users.js');

// eslint-disable-next-line no-unused-vars
const { PORT = 3000, BASE_PATH } = process.env;

const app = express();

app.use('/cards', cardsRouter);
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'public')));

// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Сервер работает на порте ${PORT}`);
});
