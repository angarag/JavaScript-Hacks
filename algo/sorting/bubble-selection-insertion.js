//put the max into the end
function bubbleSort(arr) {
  const { length } = array;
  for (let i = 0; i < length; i++)
    for (let j = 0; j < length - 1; j++)
      if (array[j] > array[j + 1]) swap(array, j, j + 1);
}
//select min and put it into the correct position by swapping
function selectionSort(arr) {
  const { length } = arr;
  let indexMin;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) if (arr[indexMin] > arr[j]) indexMin = j;
    if (i !== indexMin) swap(arr, i, indexMin);
  }
}
//insertion sort: find the first abnormal one and put it into its correct place
function insertionSort(arr) {
  const { length } = arr;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = arr[i];
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}
