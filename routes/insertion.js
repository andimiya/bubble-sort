let array = [3, 6, 4, 2, 5, 1, 6];
let numberToSort = 0;

//grab each number sequentially, from left to right
for (var i = 1; i < array.length; i++) {
  numberToSort = array[i];

    console.log(numberToSort, 'number to sort')
    console.log(array[i-1], 'compare to this');

    if (numberToSort > array[i-1]) {

      array.splice(i, 2, numberToSort, array[i-1]);
      console.log('if');
      console.log(array);
    }
    // console.log(array);
}
