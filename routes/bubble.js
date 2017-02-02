
var array = [5, 1, 4, 2, 3];

var swap = null;

//First pass
for (var i = 0; i <= array.length; i++) {
  console.log('first pass');
  var first = array[i];
  var second = array[i + 1];
  if (array[i] > array[i + 1]) {
    swap = true;
    first = array[i];
    second = array [i + 1];
    array.splice(i, 2, second, first)
    console.log(array, 'array in loop');
    console.log(first, 'first');
    console.log(second, 'second');
    console.log(swap, 'swap');
  }
}

if (swap === true){
  console.log('second pass');
  for (var i = 0; i <= array.length; i++) {
    var first = array[i];
    var second = array[i + 1];
    if (array[i] > array[i + 1]) {
      swap = true;
      first = array[i];
      second = array [i + 1];
      array.splice(i, 2, second, first)
      console.log(array, 'array in loop');
      console.log(first, 'first');
      console.log(second, 'second');
    }
  }
  swap = false;
}

if (swap === true){
  console.log('third pass');
  for (var i = 0; i <= array.length; i++) {
    var first = array[i];
    var second = array[i + 1];
    if (array[i] > array[i + 1]) {
      swap = true;
      first = array[i];
      second = array [i + 1];
      array.splice(i, 2, second, first)
      console.log(array, 'array in loop');
      console.log(first, 'first');
      console.log(second, 'second');
    }
  }
  swap = false;
}

if (swap === true){
  console.log('fourth pass');
  for (var i = 0; i <= array.length; i++) {
    var first = array[i];
    var second = array[i + 1];
    if (array[i] > array[i + 1]) {
      swap = true;
      first = array[i];
      second = array [i + 1];
      array.splice(i, 2, second, first)
      console.log(array, 'array in loop');
      console.log(first, 'first');
      console.log(second, 'second');
    }
  }
  swap = false;
}

console.log(array, 'last array');
