const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const displayResult = (result) => {
    console.log(`The square of the number is: ${result}`);
    rl.close();
}

const getInput = (callback) => {
    rl.question('Enter a number: ', (number) => {
        callback(parseInt(number));
    });
}

module.exports = { displayResult, getInput };