const express = require('express');
const router = express.Router();

router.post('/bubble', (req, res) => {
  var sortThis = req.body.array.split("").map(Number);

  var swap = null;
  var n = 0;

  while (n < sortThis.length) {
    for (var i = 0; i <= sortThis.length; i++) {
      var first = sortThis[i];
      var second = sortThis[i + 1];
      if (sortThis[i] > sortThis[i + 1]) {
        swap = true;
        n++;
        first = sortThis[i];
        second = sortThis [i + 1];
        sortThis.splice(i, 2, second, first);
      }
    }
  }
  res.send(sortThis);
});

module.exports = router;
