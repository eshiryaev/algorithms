import selectionSort from './index';

describe('selectionSort', () => {
  it('Сортируем массив [7, 2, 5, 18, 1, 3]', () => {
    expect(selectionSort([7, 2, 5, 18, 1, 3])).toEqual([1, 2, 3, 5, 7, 18]);
  });

  it('Сортируем массив [1, 11, 2, 18, 8, 3]', () => {
    expect(selectionSort([1, 11, 2, 18, 8, 3])).toEqual([1, 2, 3, 8, 11, 18]);
  });
});