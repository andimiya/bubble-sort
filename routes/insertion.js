let array = [3, 6, 4, 2, 5, 1, 6];
let numberToSort = 0;

numberToSort = array[3];

if(numberToSort > array[0]){
  first = array[0];
  second = array[1];
  array.splice(0, 2, second, first);
    console.log(array);
}

// if(numberToSort > array[0]){
//   first = array[0];
//   second = array[1];
//   array.splice(0, 2, second, first);
//     console.log(array);
// }



// for (var i = 0; i <= array.length; i++){


//   var first = array[i];
//   var second = array[i + 1];

//   if(array[i] > array[i + 1]){
//     first = array[i];
//     second = array[i + 1];
//     array.splice(i, 2, second, first);
//       console.log(array);

//   }

// }


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

