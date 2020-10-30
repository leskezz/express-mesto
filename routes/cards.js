const cardsRouter = require('express').Router();
const fs = require('fs');
const path = require('path');

// eslint-disable-next-line no-unused-vars
cardsRouter.get('/', (req, res, next) => {
  const filepath = path.join(__dirname, '../data/cards.json');
  fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(500).send({ message: 'Ошибка чтения файла cards.json' });
      return;
    }
    res.send(data);
  });
});

module.exports = cardsRouter;
