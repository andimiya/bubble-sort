let array = [6, 3, 4, 2, 5, 1];

for (var i = 1; i < array.length; i++) {

  let selected = array[i];
  let j = i - 1;
  while (j >= 0 && array[j] > selected) {
    array[j + 1] = array[j];
    j = j - 1;
    array[j + 1] = selected;
  }
}
