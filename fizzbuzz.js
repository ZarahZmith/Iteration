

function fizzBuzz(x) {
  let numbers = [];
  for (let i = 1; i <= x; i++) {
    let result;
    if (i % 3 === 0 && i % 5 === 0) {
      result = "fizzbuzz";
    } else if (i % 5 === 0) {
      result = "buzz";
    } else if (i % 3 === 0) {
      result = "fizz";
    } else {
       result = i;
     }

     numbers.push(result);
  }
  return numbers;
}

let answer = fizzBuzz(20);
console.log(answer);
