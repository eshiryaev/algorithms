import binarySearch from './index';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('binarySearch', () => {
  it('Находим число 10 в массиве', () => {
    expect(binarySearch(arr, 10)).toEqual(9);
  });

  it('Находим число 10 в массиве', () => {
    expect(binarySearch(arr, 9)).toEqual(8);
  });

  it('Находим число 10 в массиве', () => {
    expect(binarySearch(arr, 3)).toEqual(2);
  });

  it('Находим число 10 в массиве', () => {
    expect(binarySearch(arr, 1)).toEqual(0);
  });

  it('Находим несуществующее число -1 в массиве', () => {
    expect(binarySearch(arr, -1)).toEqual(null);
  });
});