const myIndex = require('./findIndexFunction');

describe('find index function', () => {
  it('should return the index of the first item whose callback returns true.', () => {
    const numbers = [1, 2, 3, 22, 22, 23];
    const cb = (nums) => nums >= 22;

    expect(myIndex(numbers, cb)).toEqual(3);
  });
});
