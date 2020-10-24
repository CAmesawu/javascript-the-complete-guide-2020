/*code adapted from Udemy course on JavaScript-The Complete Guide 2020 (Beginner + Advanced*/
/* Source: https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/ retreived on October 2020*/

const defaultResult = 0;
let currentResult = defaultResult;
let logEnteries = [];

function getUserNumber(){
  return parseInt(userInput.value)
}

//Generating calculation log
function creatAndWriteOutput (operator, resultBeforeCalc, calcNumber){
  const description = `${resultBeforeCalc}  ${operator} ${calcNumber} `;
  outputResult(currentResult, description);//from vendor file
}

function writeToLog (operationIdentifier, prevresult, operationNumber, newResult){
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevresult,
    number: operationNumber,
    result: newResult
  };
  logEnteries.push(logEntry);
  console.log(logEnteries);

}

function add() {
  const inputNumber = getUserNumber()
  const initialResult = currentResult;
  currentResult += inputNumber;
  creatAndWriteOutput ('+', initialResult, inputNumber);
  writeToLog("ADD", initialResult, inputNumber, currentResult)
}

function subtract(){
  const inputNumber = getUserNumber()
  const initialResult = currentResult;
  currentResult -= inputNumber;
  creatAndWriteOutput ('-', initialResult, inputNumber);
  writeToLog("SUBTRACT", initialResult, inputNumber, currentResult)
}


function multiply(){
  const inputNumber = getUserNumber()
  const initialResult = currentResult;
  currentResult *= inputNumber;
  creatAndWriteOutput ('*', initialResult, inputNumber);
  writeToLog("MULTIPLY", initialResult, inputNumber, currentResult)
}


function divide(){
  const inputNumber = getUserNumber()
  const initialResult = currentResult;
  currentResult /= inputNumber;
  creatAndWriteOutput ('/', initialResult, inputNumber);
  writeToLog("DIVIDE", initialResult, inputNumber, currentResult)
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
