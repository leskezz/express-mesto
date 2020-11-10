const cardsRouter = require('express').Router();
const { sendAllCards, createCard, deleteCard } = require('../controllers/cards');

cardsRouter.get('/', sendAllCards);
cardsRouter.post('/', createCard);
cardsRouter.delete('/:id', deleteCard);

module.exports = cardsRouter;
