const dayInput = document.querySelector('#day-input');
const monthInput = document.querySelector('#month-input');
const yearInput = document.querySelector('#year-input');

const submitBtn = document.querySelector('.submit-btn');

const yearOutput = document.querySelector('.year-output');
const monthOutput = document.querySelector('.month-output');
const dayOutput = document.querySelector('.day-output');



function getDayInput () {
    let value = dayInput.value;
    console.log(value);
    if (value === '') {
        document.querySelector('.empty-error').classList.remove('hidden');
        dayInput.style.borderColor = '#ff5757'
        document.querySelector('.day-label').style.color = '#ff5757';
    } else if (value < 1 || value > 31) {
        document.querySelector('.day-error').classList.remove('hidden');
        document.querySelector('.empty-error').classList.add('hidden');
    } else {
      value = '';
    }
}

function getMonthInput () {
  let value = monthInput.value;
    console.log(value);
    if (value === '') {  
      document.querySelector('.empty-error-month').classList.remove('hidden');
        monthInput.style.borderColor = '#ff5757';
        document.querySelector('.month-label').style.color = '#ff5757';
    }  else if (value < 1 || value > 12) {
      document.querySelector('.month-error').classList.remove('hidden');
      document.querySelector('.empty-error-month').classList.add('hidden');
    } else {
      value = '';
    }
}

function getYearInput () {
  let value = yearInput.value;
  let currentYear = new Date().getFullYear();
    console.log(value);
    if (value === '') {
        document.querySelector('.empty-error-year').classList.remove('hidden');
        yearInput.style.borderColor = '#ff5757';
        document.querySelector('.year-label').style.color = '#ff5757';
    } else if ( value > currentYear) {
      document.querySelector('.year-error').classList.remove('hidden');
      document.querySelector('.empty-error-year').classList.add('hidden');
    } else {
      yearInput.value = '';
    }
}

submitBtn.addEventListener('click', () => {
  getDayInput();  
  getMonthInput();
  getYearInput();
})
