'use strict'

function fizzbuzz(args) {
  try {
    if (typeof args !== 'number') {
      throw new Error('type is not number');
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
  } catch(err) {
    console.log(err);
  }
}

module.exports = fizzbuzz;
