const myMap = require('./mapFunction');

describe('map function', () => {
  it('should return a new array with numbers multiplied by 5', () => {
    const array = [1, 2, 3, 4, 5];
    const cb = (nums) => nums * 5;

    expect(myMap(array, cb)).toEqual([5, 10, 15, 20, 25]);
  });
});
