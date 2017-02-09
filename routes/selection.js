const express = require('express');
const router = express.Router();

router.post('/selection', (req, res) => {

let array = req.body.array.split("").map(Number);
// let array = [6, 3, 4, 8, 7, 6, 2, 5, 1];

//look through the array from start to finish - use a loop

let min = 0;

//finds the smallest number in the array, stores it to 'min'
  for (j = 0; j < array.length; j++) {
    min = Math.min(array[j]);

    //store the array position of the min number to 'min'
    min = j;

    //test against elements after j to find the smallest number
    for (i = j + 1; i < array.length; i++) {

      //if the element is less, then it is the new minimum
      if (array[i] < array[min]) {
        min = i;
      }
    }

    //if min is not equal to j, then swap the position of the new lowest number found with the lowest number's position
    if(min !== j) {
      var temp = array[j];
      array[j] = array[min];
      array[min] = temp;
    }
  }
});

module.exports = router;
