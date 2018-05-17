
// MY EACH

Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

// [1, 2, 3, 1, 5].myEach(num => console.log(num * 2));


 // MY MAP
 
 Array.prototype.myMap = function (callback) {
   let res = [];
   this.myEach(function(num) {
     res.push(callback(num));
   });
   return console.log(res);
 };
 
// [1, 2, 3, 1, 5].myMap(num => num % 2);

Array.prototype.myReduce = function (callback, initialValue) {
  let starter;
  if (initialValue === undefined) {
    starter = this.shift();
  } else {
    starter = initialValue;
  }
  this.myEach(function (num) {
    starter = callback(starter, num);
  });
  return console.log(starter);
};

// [1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }); // => 6

// // with initialValue
// [1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }, 25); // => 31

