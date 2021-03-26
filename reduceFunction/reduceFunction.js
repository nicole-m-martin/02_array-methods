const myReduce = (array, cb, initialVal) => {
  let state = initialVal;
  for (let item of array) state = cb(state, item);
  return state;
};

module.exports = myReduce;
