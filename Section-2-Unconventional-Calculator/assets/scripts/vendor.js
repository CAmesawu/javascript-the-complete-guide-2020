/*code adapted from Udemy course on JavaScript-The Complete Guide 2020 (Beginner + Advanced*/
/* Source: https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/ retreived on October 2020*/


const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
