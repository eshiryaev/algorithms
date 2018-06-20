import factorial from './index';

describe('factorial', () => {
  it('7!', () => {
    expect(factorial(7)).toEqual(5040);
  });

  it('5!', () => {
    expect(factorial(5)).toEqual(120);
  });
});