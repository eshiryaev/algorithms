export default function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;


  while(low <= high) {
    let mid = Math.ceil((low + high) / 2);

    if (list[mid] === item) {
      return mid;
    }

    if (list[mid] > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return null;
}

