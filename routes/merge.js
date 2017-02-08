



function mergeSort(array)
    // Base case. A list of zero or one elements is sorted, by definition.

    if (array.length <= 1) {
      return array;
    }

    // Recursive case. First, divide the list into equal-sized sublists
    // consisting of the first half and second half of the list.
    var left := empty list
    var right := empty list
    for each x with index i in m do
        if i ≤ (length of m)/2 then
            add x to left
        else
            add x to right

    // Recursively sort both sublists.
    left := merge_sort(left)
    right := merge_sort(right)

    // Then merge the now-sorted sublists.
    return merge(left, right)
}

mergeSort([6, 3, 4, 8, 7, 6, 2, 5, 1]);