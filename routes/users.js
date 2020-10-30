const usersRouter = require('express').Router();
const fs = require('fs');
const path = require('path');

const filepathUsers = path.join(__dirname, '../data/users.json');

// eslint-disable-next-line no-unused-vars
usersRouter.get('/', (req, res, next) => {
  fs.readFile(filepathUsers, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(500).send({ message: 'Ошибка чтения файла users.json' });
      return;
    }
    res.send(data);
  });
});

const doesUserExist = (req, res, next) => {
  fs.readFile(filepathUsers, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      return;
    }
    const usersData = JSON.parse(data);
    if (!usersData.find((u) => u._id === req.params.id)) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
      return;
    }
    next();
  });
};

// eslint-disable-next-line no-unused-vars
const sendUser = (req, res, next) => {
  fs.readFile(filepathUsers, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      return;
    }
    const usersData = JSON.parse(data);
    res.send(usersData.find((u) => u._id === req.params.id));
  });
};

usersRouter.get('/:id', doesUserExist);

usersRouter.get('/:id', sendUser);

module.exports = usersRouter;
