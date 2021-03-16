const brain = require('brain.js');

const numbers = new brain.NeuralNetwork();
const teamWinner = new brain.NeuralNetwork();

numbers.train([
  { input: [0, 0, 0], output: [0] },
  { input: [0, 0, 1], output: [0] },
  { input: [0, 1, 1], output: [0] },
  { input: [1, 0, 1], output: [1] },
  { input: [1, 1, 1], output: [1] }
])

teamWinner.train([
  { input: [1, 2], output: [1] }, // team 2 won
  { input: [1, 3], output: [1] }, // team 3 won
  { input: [2, 3], output: [0] }, // team 2 won
  { input: [1, 2], output: [1] }, // team 2 won
  { input: [1, 3], output: [1] } // team 3 won, team 1 has never won
])


const result = numbers.run([1, 0, 0]);
const winningTeamProbably = teamWinner.run([2, 1]) // 1 not win
const winningTeamProbably2 = teamWinner.run([1, 2]) // 2 win

console.log(`numbers Prob: ${result}`)
console.log(`winningTeamProbably Prob: ${winningTeamProbably}`)
console.log(`winningTeamProbably2 Prob: ${winningTeamProbably2}`)
