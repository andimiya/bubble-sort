const express = require('express');
const router = express.Router();

router.post('/insertion', (req, res) => {

var array = req.body.array.split("").map(Number);
// let array = [6, 3, 4, 2, 5, 1];

  for (var i = 1; i < array.length; i++) {

    var selected = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > selected) {
      array[j + 1] = array[j];
      j = j - 1;
      array[j + 1] = selected;
    }
  }
  res.send(array);
});

module.exports = router;
