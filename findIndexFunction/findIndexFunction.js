const myIndex = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) return i;
  }
};

module.exports = myIndex;
