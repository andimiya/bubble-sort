const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  var sortThis = req.body.array.split("").map(Number);

  sort();

  function sort() {
    for (var i = 0; i <= sortThis.length; i++) {
      var first = sortThis[i];
      var second = sortThis[i + 1];
      if (sortThis[i] > sortThis[i + 1]) {
        first = sortThis[i];
        second = sortThis [i + 1];
        sortThis.splice(i, 2, second, first);
        sort();
      }
    }
  }
  res.send(sortThis);
});


module.exports = router;