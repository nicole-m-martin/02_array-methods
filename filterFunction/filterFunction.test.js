const myFilter = require('./filterFunction');

describe('filter function', () => {
  it('Takes an array and callback, creates a new returned true', () => {
    const numbers = [2, 3, 4, 6, 10, 33, 54];
    const cb = (nums) => nums >= 5;

    expect(myFilter(numbers, cb)).toEqual([6, 10, 33, 54]);
  });
});
