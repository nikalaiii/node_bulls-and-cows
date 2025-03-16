'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const readline = require('node:readline');

// Write your code here

const quessNumbers = generateRandomNumber();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your numbers', (numbers) => {
  if (!checkIsValidUserInput(numbers)) {
    rl.write('your numbers are invalid');
    rl.close();
  } else {
    const result = getBullsAndCows(numbers, quessNumbers);

    rl.write(`buls: ${result.bulls}; Cows: ${result.cows}\n`);
    rl.close();
  }
});
