/**
    문자열 str 출력
*/




const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once('line', (input) => {
  const N = parseInt(input);
  const [A,B] = input.trim().split(' ').map(Number);
  const result = solution(N);
  console.log(result);
  rl.close();
});

const [A,B] = input.trim().split(' ').map(Number);