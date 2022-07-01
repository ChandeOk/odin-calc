'use strict';
const display = document.querySelector('.display');
const btns = document.querySelectorAll('.btn');
const btnContainer = document.querySelector('.btns');
// const btnsNum = document.querySelector('')

let number;
let number2;
let operator;
let result;
const opearators = ['+', '-', '/', '*'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operate = function (operator, a, b) {
  switch (operator) {
    case '+':
      return Math.round((a + b) * 100) / 100;
    case '-':
      return Math.round((a - b) * 100) / 100;
    case '/':
      if (b === 0) return 'NOPE';
      return Math.round((a / b) * 100) / 100;
    case '*':
      return Math.round(a * b * 100) / 100;
    default:
      break;
  }
};

const clear = () => {
  display.textContent = '';
  number = number2 = result = operator = '';
  return;
};
btnContainer.addEventListener('click', function (event) {
  const clickedButton = event.target.closest('.btn');
  const btnId = clickedButton.dataset.id;
  if (!clickedButton) return;
  if (btnId === 'C') {
    clear();
  }

  if (numbers.includes(btnId)) {
    if (number2) {
      display.textContent = '';
      number2 = '';
    }
    display.textContent += btnId;
  }

  if (opearators.includes(btnId)) {
    if (number && number2 && !operator) {
      // number2 = +display.textContent;
      operator = btnId;
      display.textContent = '';
      // result = operate(operator, number, number2);
      // display.textContent = result;
      return;
    }
    if (number && number2) {
      number2 = +display.textContent;
      operator = btnId;
      result = operate(operator, number, number2);
      display.textContent = result;
      return;
    }
    if (number) {
      // operator = btnId;
      // display.textContent = '';
      number2 = +display.textContent;
      if (operator === btnId) {
        result = operate(operator, number, number2);
        console.log(btnId);
        display.textContent = result;
        number = result;
      }
      if (operator !== btnId) {
        result = operate(operator, number, number2);
        operator = btnId;
        console.log(btnId, 'sadasd');
        display.textContent = result;
        number = result;
      }

      return;
    }
    operator = btnId;
    number = +display.textContent;
    display.textContent = '';
  }

  if (btnId === '=') {
    number2 = +display.textContent;
    result = operate(operator, number, number2);
    display.textContent = result;
    number = result;
    operator = '';
    // operator = '';
  }
});

//if btn = number update display

//if btn = operator => update operator => save num to num1 => clear display

//if btn = equal => save num to num2 and operate() => display result;

//if btn = opearator and number1 exist => clear display =>
// save next num to num2 => operate() => display result;
