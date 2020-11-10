const Card = require('../models/card.js');

const sendError = (err, res) => {
  if (err.name === 'ValidationError') return res.status(400).send({ message: `Переданы некорректные данные в методы создания карточки (${err})` });
  if (err.name === 'CastError') return res.status(404).send({ message: `Карточка с таким id не найдена (${err})` });
  return res.status(500).send({ message: `Произошла ошибка (${err})` });
};

const sendAllCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .then((cards) => res.send({ data: cards }))
    .catch((err) => sendError(err, res));
};

const createCard = (req, res) => {
  const owner = req.user._id;
  const { name, link } = req.body;

  Card.create({ name, link, owner })
    .then((card) => res.send({ data: card }))
    .catch((err) => sendError(err, res));
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => res.send({ data: card }))
    .catch((err) => sendError(err, res));
};

module.exports = {
  sendAllCards,
  createCard,
  deleteCard,
};
