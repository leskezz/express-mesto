const User = require('../models/user.js');

const sendError = (err, res) => {
  if (err.name === 'ValidationError') return res.status(400).send({ message: `Переданы некорректные данные в методы создания пользователя, обновления аватара пользователя или профиля (${err})` });
  if (err.name === 'CastError') return res.status(404).send({ message: `Пользователь с таким id не найден (${err})` });
  return res.status(500).send({ message: `Произошла ошибка (${err})` });
};

const sendAllUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => sendError(err, res));
};

const sendUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.send({ data: user }))
    .catch((err) => sendError(err, res));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => sendError(err, res));
};

module.exports = {
  sendAllUsers,
  sendUser,
  createUser,
};
