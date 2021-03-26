const myReduce = require('./reduceFunction');

describe('reduce function', () => {
  it('should return the final value of an accumulator/state.', () => {
    const numbers = [2, 4, 6];
    const cb = (state, add) => state + add;
    let initialVal = 0;

    expect(myReduce(numbers, cb, initialVal)).toEqual(12);
  });
});
