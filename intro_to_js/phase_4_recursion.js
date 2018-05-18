
function range(start, end) {
  if (start + 1 === end) {
    return [start, end];
  } else {
    return ([start].concat(range(start + 1, end)));
  }
  
}

// console.log(range(1, 9));


function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr.pop() + sumRec(arr);
  }
}


// let v = [2, 4, 7, 8, 10];
// console.log(sumRec(v));


function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * exponent1(base, exp - 1);
  }
}

// console.log(exponent1(2, 9));


// function exponent2(base, exp) {
//   if (exp === 0) {
//     return 1;
//   } else if (exp % 2 === 0) {
//     return (exponent2(base, (exp / 2)) ** 2);
//   } else {
//     return base * (exponent2(base, (exp - 1)/2) ** 2);
//   }
// }
// 
// console.log(exponent2(4, 4));


function fibonacci(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let fibs = fibonacci(n - 1);
    let last = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    fibs.push(last);
    return fibs;
  }
}

// console.log(fibonacci(12));


function deepDup(arr) {
  let res = [];
  
  arr.forEach(function(el) {
    if (typeof(el) === "object") {
      res.push(deepDup(el));
    } else {
      res.push(el);
    }
  });
  return res;
}

console.log(deepDup([[1, 2, 3, [1, 2, [5, 6, 7]]]]));