let array = [3, 2, 4, 5, 1, 6];

for (var i = 0; i < array.length; i++){
  var first = array[i];
  var second = array[i + 1];

  if(array[i] > array[i + 1]){
    first = array[i];
    second = array[i + 1];
    array.splice(i, 2, second, first);
      console.log(array)

  }

}


// while (n < sortThis.length-1) {
//     for (var i = 0; i <= sortThis.length; i++) {
//       var first = sortThis[i];
//       var second = sortThis[i + 1];
//       if (sortThis[i] > sortThis[i + 1]) {
//         first = sortThis[i];
//         second = sortThis [i + 1];
//         sortThis.splice(i, 2, second, first);
//       }
//     }
//     n++;
//   }

