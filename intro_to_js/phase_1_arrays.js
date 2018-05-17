// UNIQ

Array.prototype.uniq = function() {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (res.includes(this[i])) {
      continue;
    } else {
      res.push(this[i]);
    }
  }
  return res;
  
};

// console.log([1, 2, 2, 4, 6, 6, 7].uniq()); => [1, 2, 4, 6, 7]

// TWO-SUM

Array.prototype.twoSum = function() {
  let res = [];
  
  for (let i = 0; i < this.length - 1; i++) {
    for (var j = 1; j < this.length; j++) {
      if ((this[i] + this[j]) === 0) {
        res.push([i, j]);
      }
    }
  }
  return res;
};
// [-1, 2, 1, 3, -2].twoSum(); => [[0, 2], [1, 4]]

// TRANSPOSE

Array.prototype.transpose = function() {
  let res = [];
  
  for (let i = 0; i < this.length; i++) {
    let sub = [this[0][i]];
    for (let j = 1; j < this.length; j++) {
      sub.push(this[j][i]);
    }
    res.push(sub);
  }
  return res;
};

// console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].transpose());


