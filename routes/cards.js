const cards = require('express').Router();
const fs = require('fs');
const path = require('path');

cards.get('/cards', (req, res) => {
  const filepath = path.join(__dirname, '../data/cards.json');
  fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(data);
  });

});

module.exports = cards;