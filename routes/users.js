const users = require('express').Router();
const fs = require('fs');
const path = require('path');

const filepathUsers = path.join(__dirname, '../data/users.json');

users.get('/users', (req, res, next) => {

  fs.readFile(filepathUsers, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(data);
  });
});

const doesUserExist = (req, res, next) => {
  fs.readFile(filepathUsers, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const usersData = JSON.parse(data);
    if (!usersData.find(u => u._id === req.params.id)) {
      res.status(404).send({ "message": "Нет пользователя с таким id" });
      return;
    }
    next();
  });
}

const sendUser = (req, res, next) => {
  fs.readFile(filepathUsers, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const usersData = JSON.parse(data);
    res.send(usersData.find(u => u._id === req.params.id));
  });
}

 users.get('/users/:id', doesUserExist);

users.get('/users/:id', sendUser);

module.exports = users;