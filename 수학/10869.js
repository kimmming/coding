/*
10869 사칙연산
A+B
A-B
A*B
A/B
A%B
*/


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const [A,B] = input.trim().split(' ').map(Number);
  const sum = A+B;
  const diff = A-B;
  const product = A*B;
  const quotient = Math.floor(A/B);
  const remain= A%B;

  console.log(sum);
  console.log(diff);
  console.log(product);
  console.log(quotient);
  console.log(remain);
  
  rl.close();
});

