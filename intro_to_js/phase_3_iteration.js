

Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length; i++) {
    for (var j = 0; j < this.length; j++) {
      if (j <= i) {
        continue;
      } else if (this[i] > this[j]) {
          let big = this[i];
          this[i] = this[j];
          this[j] = big;
          i = 0;
      } else {
        i++;
      }
      
    }
  }
  return console.log(this);
};


// [5, 4, 3, 2, 1].bubbleSort();

String.prototype.substrings = function () {
  const res = [];
  
  for (let i = 0; i < this.length; i++) {
    res.push(this.charAt(i));
    for (let j = i + 1; j < this.length; j++) {
      let sub = this.charAt(i);
      if (i + 1 > this.length - 1) {
        break;
      }
      sub = sub + this.slice(i + 1, j + 1);
      res.push(sub);
    }
  }
  return console.log(res);
};

// "substring".substrings();