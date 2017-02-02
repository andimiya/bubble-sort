
var array = [5, 8, 1, 4, 2, 9, 7, 6, 3];

var swap = null;

sort();

function sort() {
  for (var i = 0; i <= array.length; i++) {
    var first = array[i];
    var second = array[i + 1];
    if (array[i] > array[i + 1]) {
      swap = true;
      first = array[i];
      second = array [i + 1];
      array.splice(i, 2, second, first)
      sort();
    }
  }
}