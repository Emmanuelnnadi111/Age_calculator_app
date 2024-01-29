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
        return false;
    } else if (value < 1 || value > 31) {
        document.querySelector('.day-error').classList.remove('hidden');
        document.querySelector('.empty-error').classList.add('hidden');
        return false;
    } else {
      document.querySelector('.day-error').classList.add('hidden');
      return true;
    }
}

function getMonthInput () {
  let value = monthInput.value;
    console.log(value);
    if (value === '') {  
      document.querySelector('.empty-error-month').classList.remove('hidden');
        monthInput.style.borderColor = '#ff5757';
        document.querySelector('.month-label').style.color = '#ff5757';
        return false;
    }  else if (value < 1 || value > 12) {
      document.querySelector('.month-error').classList.remove('hidden');
      document.querySelector('.empty-error-month').classList.add('hidden');
      return false;
    } else {
      document.querySelector('.month-error').classList.add('hidden');
      return true;
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
        return false;
    } else if ( value > currentYear) {
      document.querySelector('.year-error').classList.remove('hidden');
      document.querySelector('.empty-error-year').classList.add('hidden');
      return false;
    } else {
      document.querySelector('.year-error').classList.add('hidden');
      return true;
    }
}

function calculateAge(birthday) {
  const birthdate = new Date(birthday)
  let today = new Date();
  let years = today.getFullYear() - birthdate.getFullYear();
  let month = today.getMonth() - birthdate.getMonth();
  let days = today.getDate() - birthdate.getDate();

  if (month < 0 || (month === 0 && days < 0)) {
      years--;
      if (month === 0) {
          month = 11;
      } else {
          month = 12 + month;
      }
      days = 30 + days;
  }
  // document.querySelector('.year-output').innerHTML = years;
  yearOutput.innerHTML = years;
  monthOutput.innerHTML = month;
  dayOutput.innerHTML = days;
}


submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let day = getDayInput();
  let month = getMonthInput();
  let year = getYearInput();
  if (!day || !month || !year) return
  let birthday = `${yearInput.value}/${monthInput.value}/${dayInput.value}`;
  calculateAge(birthday);
})

