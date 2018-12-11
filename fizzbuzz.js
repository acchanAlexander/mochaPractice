'use strict'

function fizzbuzz(args) {
  if (!isValidArgs(args)) {
    return;
  }

  for(let i = 1; i < args + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

function isValidArgs(args) {
  if (typeof args !== 'number') {
    console.log('args is not number')
    return false;
  }
  return true;
}

module.exports = fizzbuzz;
