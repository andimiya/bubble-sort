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
> Create a loop that runs from 0 until the length of the array.
> Compare a number in the array to the number next to it in the array.
> If the first number is larger, then swap the position of the 2 numbers.
> Continue to run this loop until the entire array is sorted.
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
  /* finds the smallest number in the array, stores it to 'min'*/
  min = Math.min A[j]
  min = j
  for i = j + 1 to length(A)
    if (A[i] < A[min])
      min = 1
    end if
  end for
  if (min!== j)
    swap A[j] and A[min]
```

### Performance
**Best Case Scenario:**

**Worst Case Scenario:**


## Merge Sort
