function mergeSort(array) {

    //Base case - if array.length <= 1, then array is already sorted and array should be returned
    if (array.length <= 1) {
      return array;
    }

    //middle of the array
    var mid = Math.floor(array.length / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid, array.length);
    console.log(left, 'left');
    console.log(right, 'right');

    //bring the left and array's from each callstack into the sortCombine function.
    //sortCombine function's job will be to order and concat all of the pieces
    return sortCombine(mergeSort(left), mergeSort(right));
}

//Sort each array, then combine them
function sortCombine (left, right) {
  var result = [];

  //sort and merge each element, if the length of both the left and right arrays are greater than 0
  //push the sorted results into the result array

  //loop through until the array halves have 1 item left in it
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      //push the first element in each array to the combined array
      result.push(left.shift());
     console.log(result, 'result');
    }
    else {
      result.push(right.shift());
    }
  }
  return result.concat(left.slice(0).concat(right.slice(0)));
}



mergeSort([6, 3, 4, 8, 7, 2, 5, 1]);