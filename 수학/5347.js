/*
5347 LCM
최소 공배수

3 개수
15 21 105
33 22  66
9 10  90

a*b/(a%b)

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;

rl.on('line', (input) => {
    if(count===0){
        count=Number(input);
    }else{
        const [a, b]= input.trim().split(' ').map(Number);
        const result = lcm(a,b);
        console.log(result);
        count--;
        if(count===0){ rl.close();}
    }
});

function solution(a, b){
    if(b === 0){
        return a;
    }else{
        return solution(b, a % b);
    }
}

function lcm(a, b){
    const gcd = solution(a,b);
    return (a*b) / gcd;
}

/**

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count=0;

rl.on('line', (input) => {
    if(count===0){
        count=Number(input);
    }else{
        const [a, b]= input.trim().split(' ').map(Number);
        const result = (a * b) / solution(a, b);
        console.log(result);
        count--;
        if(count===0){ rl.close();}
    }
});

function solution(a, b){
    if(b === 0){
        return a;
    }else{
        return solution(b, a % b);
    }
}


 */