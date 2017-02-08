



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
    return mergeSort(left, right);

    // Recursive case. First, divide the list into equal-sized sublists
    // consisting of the first half and second half of the list.

}


    // for each x with index i in m do
    //     if i ≤ (length of m)/2 then
    //         add x to left
    //     else
    //         add x to right

    // Recursively sort both sublists.
//     left := merge_sort(left)
//     right := merge_sort(right)

//     // Then merge the now-sorted sublists.
//     return merge(left, right)
// }

mergeSort([6, 3, 4, 8, 7, 2, 5, 1]);