const User = require('../models/user.js');
const sendError = require('../utils/error');

const sendAllUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => sendError(err, res));
};

const sendUser = (req, res) => {
  User.findById(req.params.id)
    .orFail(new Error('Not Found'))
    .then((user) => res.send({ data: user }))
    .catch((err) => sendError(err, res));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => sendError(err, res));
};

const updateUser = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
      upsert: true, // если пользователь не найден, он будет создан
    },
  )
    .orFail(new Error('Not Found'))
    .then((user) => res.send({ data: user }))
    .catch((err) => sendError(err, res));
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
      upsert: true, // если пользователь не найден, он будет создан
    },
  )
    .orFail(new Error('Not Found'))
    .then((user) => res.send({ data: user }))
    .catch((err) => sendError(err, res));
};

module.exports = {
  sendAllUsers,
  sendUser,
  createUser,
  updateUser,
  updateAvatar,
};
