/*
요세푸스 문제

N 명이 원 
K 번째 사람 제거

(7,3)
1,2,3,4,5,6,7
3번째 사람 제거 && 3명의 사람이 모두 제거될 때까지 계속


1부터 N까지의 숫자를 순서대로 리스트에 저장합니다.
현재 위치를 나타내는 변수를 0으로 초기화합니다.
반복문을 사용하여 남은 사람이 한 명이 될 때까지 다음 작업을 수행합니다:
현재 위치에서 K번째 사람을 제거합니다. 이 사람은 요세푸스 순열에 추가됩니다.
현재 위치를 K만큼 증가시킵니다.
만약 현재 위치가 리스트의 길이보다 크거나 같다면, 현재 위치를 리스트의 길이로 나눈 나머지 값을 적용합니다. 이는 원형으로 구성된 리스트에서 다음 위치를 계산하기 위함입니다.
요세푸스 순열을 출력합니다.
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line',input => {
    const [N,K] = input.trim().split(' ').map(Number);
    const sequence = solution(N,K);
    console.log(`<${sequence.join(', ')}>`);

    rl.close();
})

function solution(N,K){
    const Josephus=[];
    let index= [];

    for(let i=1; i<=N;i++){
        index.push(i);
    }

    let count = 0;
    while(index.length>0){
        count=(count+K-1) % index.length;
        Josephus.push(index.splice(count,1)[0]);
    }
    return Josephus;
}