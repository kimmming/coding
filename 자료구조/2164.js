/*
2164 카드2

N = 4
1/2/3/4
2/3/4/  - 1
3/4/2
4/2 - 3
2/4
4 - 2

N 이 주어졌을 때 제일 마지막에 남게 되는 카드


*/
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line',input=>{
    const N =parseInt(input);
    const lastCard= solution(N);
    console.log(lastCard);
    rl.close();
})

function solution(N){
    let card = 1;
    while(card * 2<=N){
        card *=2;
    }
    if(card===N){
        return N
    }else{
        return (N-card)*2;
    }
}