const usersRouter = require('express').Router();
const { sendAllUsers, sendUser, createUser } = require('../controllers/users');

usersRouter.get('/', sendAllUsers);

usersRouter.get('/:id', sendUser);

usersRouter.post('/', createUser);

module.exports = usersRouter;
