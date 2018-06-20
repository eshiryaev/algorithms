const findSmallIndex = arr => {
  let smallestIndex = 0;
  let smallestValue = arr[0];

  arr.forEach((value, index) => {
    if(smallestValue > value) {
      smallestIndex = index;
      smallestValue = value;
    }
  });

  return smallestIndex;
};

const selectionSort = arr => {
  const newArr = [];

  for (let i = 0, arrLength = arr.length; i < arrLength; i++) {
    const index = findSmallIndex(arr);

    newArr.push(arr.splice(index, 1)[0]);
  }

  return newArr;
};


export default selectionSort;

