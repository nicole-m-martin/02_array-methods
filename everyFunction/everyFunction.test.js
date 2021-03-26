const myEvery = require('./everyFunction');

describe('every function', () => {
  it('should return callback (cb) overall true.', () => {
    const numbers = [1, 3, 5, 7, 9];
    const cb = (nums) => nums % 2 === 1;

    expect(myEvery(numbers, cb)).toBeTruthy();
  });

  it('should return callback (cb) overall false.', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const cb = (nums) => nums % 2 === 1;

    expect(myEvery(numbers, cb)).toBeFalsy();
  });
});
