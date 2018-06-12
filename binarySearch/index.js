function binarySearch(list, item) {
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



const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log(binarySearch(list, 10));
console.log(binarySearch(list, 9));
console.log(binarySearch(list, 3));
console.log(binarySearch(list, 1));
console.log(binarySearch(list, -1));

