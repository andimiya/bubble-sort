var array = [4, 2, 3, 1, 6, 5, 9];



function quickSort(array) {

  var pivot = array[0];
  var left = [];
  var right = [];

  if (array.length <= 1) {
    return array;
  }

  //split
  for (var i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    }
    else if (array[i] > pivot) {
      right.push(array[i]);
    }
    console.log(right, 'right array');
    console.log(left, 'left array');
  }
  console.log('test');

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(array));