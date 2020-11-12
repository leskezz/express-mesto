const sendError = (err, res) => {
  if (err.name === 'ValidationError') return res.status(400).send({ message: 'Переданы некорректные данные в методы создания пользователя, обновления аватара пользователя или профиля' });
  if (err.message === 'Not Found') return res.status(404).send({ message: 'Пользователь или карточка с таким id не найдены' });
  if (err.name === 'CastError') return res.status(400).send({ message: 'Указан невалидный id карточки или пользователя' });
  return res.status(500).send({ message: 'Произошла ошибка' });
};

module.exports = sendError;
