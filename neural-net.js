const brain = require('brain.js');

const numbers = new brain.NeuralNetwork();

numbers.train([
  { input: [0, 0, 0], output: [0] },
  { input: [0, 0, 1], output: [0] },
  { input: [0, 1, 1], output: [0] },
  { input: [1, 0, 1], output: [1] },
  { input: [1, 1, 1], output: [1] }
])

const result = numbers.run([1, 0, 0])

console.log(`Prob: ${result}`)
