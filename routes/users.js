const usersRouter = require('express').Router();
const {
  sendAllUsers, sendUser, createUser, updateUser, updateAvatar,
} = require('../controllers/users');

usersRouter.get('/', sendAllUsers);

usersRouter.get('/:id', sendUser);

usersRouter.post('/', createUser);

usersRouter.patch('/me', updateUser);

usersRouter.patch('/me/avatar', updateAvatar);

module.exports = usersRouter;
