/*
괄호
VPS : (), (X)
예외: ((), ((())

VPS ? YES : NO
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const testCases = [];

rl.on('line', (line) => {
  testCases.push(line);
});

rl.on('close', () => {
  for (let i = 1; i < testCases.length; i++) {
    const result = isVPS(testCases[i]) ? "YES" : "NO";
    console.log(result);
  }
});

function isVPS(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        return false; // 여는 괄호 없이 닫는 괄호가 나온 경우
      }
      stack.pop();
    }
  }

  return stack.length === 0; // 스택이 비어있으면 올바른 괄호 문자열(VPS)
}
