
var sortThis = [5, 8, 1, 4, 2, 9, 7, 6, 3];

sort();

function sort() {
  for (var i = 0; i <= sortThis.length; i++) {
    var first = sortThis[i];
    var second = sortThis[i + 1];
    if (sortThis[i] > sortThis[i + 1]) {
      first = sortThis[i];
      second = sortThis [i + 1];
      sortThis.splice(i, 2, second, first)
      sort();
    }
  }
}
console.log(sortThis, 'array in loop');