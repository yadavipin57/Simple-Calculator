const body = document.querySelector('body');
const displayField = document.querySelector('#display-field');
const numButtons = document.querySelectorAll('.num-button');

let string = '';
let arr = Array.from(numButtons);

document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (
    !isNaN(key) ||
    key === 'Backspace' ||
    key === 'Enter' ||
    key === '+' ||
    key === '-' ||
    key === '*' ||
    key === '/' ||
    key === '.'
  ) {
    e.preventDefault();
    if (key === 'Backspace') {
      string = string.substring(0, string.length - 1);
    } else if (key === 'Enter') {
      let result = eval(string).toFixed(9);
      string = String(result);
      displayField.value = string;
      if (e.target.value === 'DE') {
        string = string.substring(0, string.length - 1);
        displayField.value = string;
      }
    } else {
      string += key;
    }
  } else {
    displayField.value += '';
  }
  displayField.value = string;
});

arr.forEach((num) => {
  num.addEventListener('click', (e) => {
    if (e.target.value === '=') {
      let result = eval(string).toFixed(9);
      string = String(result);
      displayField.value = string;
      if (e.target.value === 'DE') {
        string = string.substring(0, string.length - 1);
        displayField.value = string;
      }
    } else if (e.target.value === 'AC') {
      string = '';
      displayField.value = string;
    } else if (e.target.value === 'DE') {
      string = string.substring(0, string.length - 1);
      displayField.value = string;
    } else {
      string += e.target.value;
      displayField.value = string;
    }
  });
});

// Change Theme

const sunIcon = document.querySelector('.fa-sun');
const moonIcon = document.querySelector('.fa-moon');
const theme = document.querySelector('.theme');
const header = document.querySelector('header');
const calculator = document.querySelector('.calculator')

theme.addEventListener('click', () => {
  body.style.background = 'linear-gradient(135deg, #ffecbc, #d0d7e7)';
  header.style.color = '#222';
  theme.style.backgroundColor = '#ffc42b';
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'inline-block';
  calculator.style.backgroundColor = '#ECF0F3'
  
});
