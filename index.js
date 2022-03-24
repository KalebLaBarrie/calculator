const display = document.getElementById('display');
const operators = ['+', '-', '*', '/'];
let operator;
let hasOperator;
// let firstNumber;
// let secondNumber;
let numbers = [];
let displayValue;

const add = function (arr) {
  displayValue = arr.reduce((a, b) => {
    return a + b;
  });

  return displayValue;
};

const subtract = function (arr) {
  displayValue = arr.reduce((a, b) => {
    return a - b;
  });

  return displayValue;
};
const divide = function (arr) {
  displayValue = arr.reduce((a, b) => {
    return a / b;
  });

  return displayValue;
};

const multiply = function (arr) {
  displayValue = arr.reduce((a, b) => {
    return a * b;
  });

  return displayValue;
};

function operate(operator) {
  if (operator === '+') {
    displayValue = add(numbers);
  } else if (operator === '-') {
    displayValue = subtract(numbers);
  } else if (operator === '*') {
    displayValue = multiply(numbers);
  } else if (operator === '/') {
    displayValue = divide(numbers);
  } else {
    displayValue = 'Error';
  }
  numbers = [displayValue];
  display.innerText = displayValue;
}

let numberButtons = document
  .querySelector('.buttons')
  .addEventListener('click', (event) => {
    let value = event.target.innerText;
    console.log(value, operator);
    // console.log(value === '←');
    // Check if class has value of number

    if (operators.includes(value)) {
      // If operand exist already and there are two numbers in numbers array calculate the first two numbers with already stored operand
      saveNumber();
      console.log(numbers);
      console.log(operator);

      if (numbers.length === 2 && hasOperator) {
        console.log('I need to calculate');
        operate(operator);
        display.innerText = displayValue;
        hasOperator = false;
        return;
      }
      operator = value;
      hasOperator = true;
      // saveNumber();

      return;
    }

    if (event.target.classList.contains('number')) {
      display.innerText += value;
      displayValue = parseInt(display.innerText);
    }

    if (value === 'C') {
      clearCalc();
    }

    if (value === '←') {
      display.innerText = display.innerText.slice(0, -1);
    }

    if (value === '=') {
      saveNumber();

      operate(operator);
      // display.innerText = displayValue;
    }
  });

function saveNumber() {
  if (display.innerText) {
    numbers.push(displayValue);
    clearCalc();
  }
}

// let operators = document.query;

function clearCalc() {
  display.innerText = '';
  displayValue = null;
}
