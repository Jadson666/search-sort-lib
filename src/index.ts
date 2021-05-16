const binarySearch = (
  sortedArray: any[],
  target: number,
  comparator: (ele: any) => number = (ele) => ele
) => {
  let start = 0;
  let end = sortedArray.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (comparator(sortedArray[middle]) === target) {
      return middle;
    } else if (comparator(sortedArray[middle]) < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

export { binarySearch };
