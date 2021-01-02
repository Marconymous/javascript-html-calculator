//Strings
var outputString = ""
var currentResultString = "";
var operator = ''

//Numbers
var currentResult = 0.0;
var newNumber = 0.0;
var result = 0.0;


function buttonPress(button) {
console.log("Button pressed : " + button);
  switch (button) {
    case 'd':
      newNumber = 0;
      currentResult = 0;
      outputString = ""
      currentResultString = ""
      var operator = ''
      break;
    case '/': case '*': case '+': case '-':
      operatorPressed(button);
      break;
    case '=':
      newNumber = calculate();
      outputString = newNumber;
      break;
    case '.':
      currentResultString += ".";
      outputString = outputString.concat(button);
      newNumber = parseFloat(currentResultString);
      break;
    default:
      currentResultString += button;
      outputString = outputString.concat(button);
      newNumber = parseFloat(currentResultString);
      break;
  }
  console.log("old number : " + currentResult);
  console.log("new number : " + newNumber);
  console.log("operator   : " + operator);
  document.getElementById("output").value = outputString;
}

function operatorPressed(newOperator) {
  operator = newOperator;
  currentResult = newNumber;
  newNumber = 0.0;
  currentResultString = ""
  outputString = ""
}

function calculate() {
  switch (operator) {
    case '*':
      result = currentResult * newNumber;
      break;
    case '/':
      result = currentResult / newNumber;
      break;
    case '+':
      result = currentResult + newNumber;
      break;
    case '-':
      result = currentResult - newNumber;
      break;
  }
  return result;
}
