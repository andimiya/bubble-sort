const express = require('express');
const router = express.Router();
const d3 = require('d3');


router.get('/bubble', (req, res) => {
  res.render('index');
});

router.post('/bubble', (req, res) => {

  var sortThis = [5, 8, 1, 2, 4, 2, 9, 7, 6, 3];
  // var sortThis = req.body.array.split("").map(Number);

  var n = 0;
  var x = 0;
  var y = 0;

  while (n < sortThis.length-1) {
    for (var i = 0; i <= sortThis.length; i++) {
      var first = sortThis[i];
      var second = sortThis[i + 1];
      if (sortThis[i] > sortThis[i + 1]) {
        first = sortThis[i];
        second = sortThis [i + 1];
        sortThis.splice(i, 2, second, first);
      }
    }
    n++;
  }

  res.send(sortThis);
});



module.exports = router;
