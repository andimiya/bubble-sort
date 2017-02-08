function mergeSort(array) {

    //Base case - if array.length <= 1, then array is already sorted and array should be returned
    if (array.length <= 1) {
      return array;
    }

    //middle of the array
    var mid = Math.floor(array.length / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid, array.length);
    console.log(left);
    console.log(right);

    //recursion - call the mergeSort function again, and return both the left and right array each time it runs
    mergeSort(left, right);
    return sortCombine(left, right);
}

//Sort each array, then combine them
function sortCombine (left, right) {
  var result = [];
  //sort and merge each element, if the length of both the left and right arrays are greater than 0
  //push the sorted results into the result array

  console.log(left[0], 'left');
  console.log(right[0], 'right');

  //loop through until the array halves have 1 item left in it
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      result.push(left[0]);
    }
    else {
      result.push(right[0]);
    }

    // console.log(result, 'result');
    // else {

    // }

    // else if (left[0] > right[0]) {
    //   result.push(right[0], left[0]);
    // }

  }

}

mergeSort([6, 3, 4, 8, 7, 2, 5, 1]);