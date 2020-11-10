const fs = require('fs');
const path = require('path');
const usersRouter = require('express').Router();
const { sendAllUsers, sendUser, createUser } = require('../controllers/users');

const filepathUsers = path.join(__dirname, '../data/users.json');

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

usersRouter.get('/', sendAllUsers);

usersRouter.get('/:id', doesUserExist);

usersRouter.get('/:id', sendUser);

usersRouter.post('/', createUser);

module.exports = usersRouter;
