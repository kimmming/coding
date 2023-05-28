/*
두 단어가 서로 애너그램 관계에 있도록 만들기 위해서 제거해야 하는 최소 개수의 문자 수를 구하는 프로그램
*/
function calculateMinimumRemovals(word1, word2) {
    // 각 단어의 문자 빈도 계산
    const frequencyMap1 = calculateFrequency(word1);
    const frequencyMap2 = calculateFrequency(word2);
  
    // 두 단어의 문자 빈도를 비교하여 최소 제거 수 계산
    let removalCount = 0;
  
    for (const [char, count] of frequencyMap1.entries()) {
      const countInWord2 = frequencyMap2.get(char) || 0;
      removalCount += Math.abs(count - countInWord2);
    }
  
    // word2에서 word1에 없는 문자들의 빈도도 고려
    for (const [char, count] of frequencyMap2.entries()) {
      if (!frequencyMap1.has(char)) {
        removalCount += count;
      }
    }
  
    return removalCount;
  }
  
  function calculateFrequency(word) {
    const frequencyMap = new Map();
  
    for (const char of word) {
      frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
  
    return frequencyMap;
  }
  
  // 입력 처리
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let word1 = '';
  let word2 = '';
  
  rl.question('첫 번째 단어를 입력하세요: ', (input1) => {
    word1 = input1.trim();
  
    rl.question('두 번째 단어를 입력하세요: ', (input2) => {
      word2 = input2.trim();
  
      // 최소 제거 수 계산 및 출력
      const minimumRemovals = calculateMinimumRemovals(word1, word2);
      console.log(minimumRemovals);
  
      rl.close();
    });
  });
  