function binarySearchRecursive(arr, val, low, high) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const el = arr[mid];
    if (el < val) {
      return binarySearchRecursive(arr, val, mid + 1, high);
    } else if (el > value) {
      return binarySearchRecursive(arr, val, low, mid - 1);
    } else return mid;
  }
  return -1; //doesn't exist
}
export function binarySearch(arr, val) {
  const sortedArray = quickSort(arr);
  const low = 0;
  const high = sortedArray.length - 1;
  return binarySearchRecursive(arr, val, low, high);
}
