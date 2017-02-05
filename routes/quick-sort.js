var array = [4, 2, 3, 1, 6, 5, 9];


function quickSort(array) {

  var pivot = array[0];
  var left = [];
  var right = [];

  if (array.length <= 1) {
    console.log('if');
    return array;
  }

  //split
  for (var i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
      console.log(left);
    }
    else if (array[i] > pivot) {
      right.push(array[i]);
      console.log(right, 'left array');
    }
  }
  console.log('test');
  console.log(left, 'left array');
  return quickSort(left.concat(pivot, right)), quickSort(right);
  quickSort();
}

