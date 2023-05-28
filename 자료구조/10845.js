/*
큐

정수 저장 큐 구현, 입력으로 명령 처리 프로그램
push: X 를 큐에 push
pop: 가장 앞 정수 pop, 출력. 정수 X ? -1 출력
size: 큐 length 출력
empty: empty ? 1 : 0
front: 맨 앞 정수 출력. 정수 X ? -1 출력
back: 맨 뒤 정수 출력. 정수 X ? -1 출력
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const solve = (commands) => {
  const queue = [];
  const answer = [];

  for (const command of commands) {
    const [op, arg] = command.split(' ');
    switch (op) {
      case 'push':
        queue.push(arg);
        break;
      case 'pop':
        answer.push(queue.length ? queue.shift() : -1);
        break;
      case 'size':
        answer.push(queue.length);
        break;
      case 'empty':
        answer.push(queue.length ? 0 : 1);
        break;
      case 'front':
        answer.push(queue.length ? queue[0] : -1);
        break;
      case 'back':
        answer.push(queue.length ? queue[queue.length - 1] : -1);
        break;
    }
  }

  return answer;
};

let lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const n = Number(lines[0]);
  const commands = lines.slice(1);
  const result = solve(commands);
  console.log(result.join('\n'));
});
