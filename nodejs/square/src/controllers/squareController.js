const calculateSquare = require('../models/squareModel');
const { displayResult, getInput } = require('../views/squareView');

const calculateAndDisplaySquare = () => {
    getInput((number) => {
        const result = calculateSquare(number);
        displayResult(result);
    });
}

module.exports = calculateAndDisplaySquare;