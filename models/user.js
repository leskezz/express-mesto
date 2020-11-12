const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        // eslint-disable-next-line no-useless-escape
        return /^https?:\/\/(www\.)?[\w-._~:\/?#\[\]@!$&'()*+,;=]+(\.[a-z]+)[[\w-._~:\/?#\[\]@!$&'()*+,;=]*#?$/.test(v);
      },
      message: 'Введена некорректная ссылка',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
