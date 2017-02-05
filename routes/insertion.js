let array = [6, 3, 4, 2, 5, 1];

//grab each number sequentially, from left to right
for (var i = 1; i < array.length; i++) {

  //store the number that's 'grabbed' in a variable
    //need to know the numberToSort distance from array 0, which is i
    //compare the grabbed number to the number on it's left, until it's not as big as the number on it's left
  n = 0;

  let selected = array[i];
  let compareTo = array[i - 1];
  let temp = null;

  while (n >= 0 && selected > compareTo) {
    temp = selected;
    console.log(temp, 'temp');
    selected = compareTo;
    console.log(compareTo, 'compareTo');
    compareTo = temp;
    console.log(compareTo, 'this should be same as the temp console log now');

    //swap array[compareTo] and array[compareTo - 1]
  n--;
  console.log(array, 'end of while loop');
  }
}
