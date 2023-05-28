const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const trees = [];

rl.on('line', (line) => {
  if (line.trim() !== '') {
    trees.push(line.trim());
  }
});

rl.on('close', () => {
  calculateTreeDistribution(trees);
});

function calculateTreeDistribution(trees) {
  const treeCountObj = {};
  let totalCount = 0;

  trees.forEach((tree) => {
    if (treeCountObj[tree]) {
      treeCountObj[tree]++;
    } else {
      treeCountObj[tree] = 1;
    }
    totalCount++;
  });

  const sortedTrees = Object.keys(treeCountObj).sort();

  sortedTrees.forEach((tree) => {
    const count = treeCountObj[tree];
    const percentage = (count / totalCount) * 100;
    const roundedPercentage = percentage.toFixed(4);
    console.log(`${tree} ${roundedPercentage}`);
  });
}
