var sortThis = [4, 2, 3, 1, 6, 5];

var pivot = sortThis[0];

var leftArray = [];
var rightArray = [];

//First split
for (var i = 0; i < sortThis.length; i++){
  if (sortThis[i] < pivot) {
    leftArray.push(sortThis[i]);
  }
  else if (sortThis[i] > pivot) {
    rightArray.push(sortThis[i]);
  }
}

//After this loop, leftArray = [2, 3, 1]
//rightArray = [6, 5]

console.log(leftArray);
console.log(rightArray);
