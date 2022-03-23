const display = document.getElementById('display');
const operators = ['+', '-', '*', '/'];
let operator;
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

  display.innerText = displayValue;
}

let numberButtons = document
  .querySelector('.buttons')
  .addEventListener('click', (event) => {
    console.log(event.target.innerText);
    // console.log(event.target.innerText === '←');
    // Check if class has value of number
    if (event.target.classList.contains('number')) {
      display.innerText += event.target.innerText;
      displayValue = parseInt(display.innerText);
    }

    if (event.target.innerText === 'C') {
      clearCalc();
    }

    if (event.target.innerText === '←') {
      display.innerText = display.innerText.slice(0, -1);
    }

    if (event.target.innerText === '=') {
      saveNumber();

      operate(operator);
      display.innerText = displayValue;
    }

    if (operators.includes(event.target.innerText)) {
      operator = event.target.innerText;
      console.log('Arithmetic!!');
      // if (!firstNumber) {
      //   firstNumber = displayValue;
      //   clearCalc();
      // } else if (!secondNumber) {
      //   secondNumber = displayValue;
      //   clearCalc();
      // }
      saveNumber();
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
