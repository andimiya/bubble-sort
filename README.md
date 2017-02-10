<!-- Create a README.md file and for each algorithm include the following:

* Explain to a five year old how the algorithm works (3-4 sentences max)
*Psuedo code for each sorting implementation
*In your own words, describe the performance of the alogirthm for the following cases:
    * Best case scenario
    * Worst case scenario -->

# Sorting Algorithms

## Bubble Sort

Bubble sort sorts numbers by pairing up numbers starting from the beginning of the list. If one number is smaller than the other, the smaller number gets ordered first. You compare each pair of numbers from start of the list to the end, and keep comparing and swapping numbers until all numbers are in order.

### Pseudocode
```
n, x, y
*/Create a loop that runs from 0 until the length of the array.*/
while (n < A.l - 1)
  */Continue to run this loop until the entire array is sorted.*/
  for i <- 0 to A.l
    b = A[i]
    c = A[i + 1]
    */Compare a number in the array to the number next to it in the array.*/
    */If the first number is larger, then swap the position of the 2 numbers.*/
    if (A[i] > A[i + 1])
      b = A[i]
      c = A[i + 1]
      A.splice(i, 2, b, c)
    end if
  end for
  n++
end while

```

### Performance
**Best Case Scenario:**

Performance will be best if the array is already sorted, or if only the first two numbers in the list were out of order.
Because the array is sorted by first comparing the first two numbers and ordering them, it would only need to go through one pass through the array until it was done sorting.

**Worst Case Scenario:**

Performance will be the least ideal if the numbers are in reverse order, because it would take as many passes as the length of the array to complete the sort.

## Insertion Sort

Insertion sort starts by taking the second number in the array, then compares it to the first number. If the second number is smaller than the first, it orders it ahead of the first number. Then, insertion sort takes the next number in line, the third number, and orders it among the first two numbers. Insertion sort then takes the forth number and orders it among the first three numbers, and continues this process until the entire array is sorted.

### Pseudocode

```
/* look through the array from start to finish - use a loop */
for i ← 1 to length(A)
    j ← i
    while j > 0 and A[j-1] > A[j]
        swap A[j] and A[j-1]
        j ← j - 1
    end while
end for
```

### Performace
**Best Case Scenario:**
This array would be sorted fastest if the array was already in order except for the first two numbers in the array.
The program would just do one pass over the array and be done sorting.

**Worst Case Scenario:**
This array would be least performant if the array began with the numbers sorted in reverse order, because the entire array would have to be scanned for a number to be sorted, and that would occur continally until the last number is sorted.

## Selection Sort

Selection sort sorts an array of numbers by searching through the entire array and finding the smallest number. When it finds that number, it orders it first. It then searches through all remaining numbers, finds the smallest number, and orders that number second. It continues to do this until the entire array is sorted.

### Pseudocode
```
min = 0
/* look through the array from start to finish - use a loop */
for j <- 0 to length(A)
  /* finds the smallest number in the array, stores it to 'min' /*
  min = Math.min A[j]
  /* store the array position of the min number to 'min' */
  min = j
  /* test against elements after j to find the smallest number */
  for i = j + 1 to length(A)
    /* if the element is less, then it is the new minimum */
    if (A[i] < A[min])
      min = 1
    end if
  end for
  /* if min is not equal to j, then swap the position of the new lowest number found with the lowest number's position */
  if (min!== j)
    swap A[j] and A[min]
```

### Performance
**Best Case Scenario:**
- Most performant scenario would be if the array is sorted, except that the smallest number in the array is not in the first position.

**Worst Case Scenario:**
- Least performant scenario would be if the array was sorted in reverse order, because each number in the array would have to be picked up and sorted.


## Merge Sort

Merge sort divides an array of numbers down into pieces, compares each pair of numbers, then compares each set of numbers, then strings all of the numbers together.

### Pseudocode
```
functionA (array)
    /*Base case - if array.length <= 1, then array is already sorted and array should be returned*/
  if (length(A))
    return A
  end if

  mid = Math.floor(length(A)/2)
  left = slice(0, mid)
  right = slice(mid, length(A))

  /*Bring the left and array's from each callstack into the sortCombine function*/
  /*SortCombine function's job will be to order and concat all of the pieces*/

  return functionB (a, b)
end functionA

/*Sort each array, then combine them*/
functionB (a, b)
  result = []
  /*sort and merge each element, if the length of both the left and right arrays are greater than 0*/
  while (length(a) > 0 && length(b) > 0)
    if (a[0] < b[0])
      /*push the first element in each array to the combined array*/
      result.push(a.shift)
    end if
    else
      result.push(b.shift)
    end else
  end while
  return result.concat (a, b)
end FunctionB
```
### Performance
*Best and Worst Case Scenario:*
- There is no real best or worse case, because even if the array is already sorted, the numbers will still all get split up, then put back together. The more in-order the numbers are, the less swapping will occur, but performance would still be generally the same.

## Quick Sort
Quick sort sorts by splitting the array in half, sorting each half separately, then comparing the two sorted halves and sorting the halves.
By sorting in sections, it can sort more quickly.

### Pseudocode
```
functionA (array)
  pivot = array[0]
  a = []
  b = []
  if array.l < pivot
    return array
  end if

  for i <- 0 to array.l
    if (array[i] < pivot)
      a.push(array[i])
    end if
    else if (array[i] > pivot)
      b.push(array[i])
    end if
  end for

  return functionA(a).concat(pivot, functionA(b))
end functionA
```

### Performance
*Best Case Scenario:*
Most performant scenario would occur if the pivot number was the middle-most number in the sorted array, and the array was very close to being already sorted.

*Worst Case Scenario:*
The least performant scenario would occur if the pivot number is either the smallest number or the largest number in the list.