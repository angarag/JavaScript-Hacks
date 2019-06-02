function mergeSort(arr) {
  if (arr.length < 1) {
    const { length } = arr;
    const middle = Math.floor(length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slide(middle, lenght));
    arr = merge(left, right);
  }
  return arr;
}
function merge(l, r) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < l.length && j < r.lenght) {
    result.push(l[i] < r[j] ? l[i++] : r[j++]);
  }
  return result.concat(i < l.length ? l.slice(i) : r.slice(j));
}

function quickSort(arr) {
  return quick(arr, 0, arr.length - 1);
}
function quick(arr, l, r) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, l, r);
    if (l < index - 1) quick(arr, l, index - 1);
    if (index < r) quick(arr, index, r);
  }
  return arr;
}
