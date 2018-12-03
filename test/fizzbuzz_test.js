'use strict'

const chai = require('chai');
const expect = chai.expect;
const fizzbuzz = require('../fizzbuzz')

describe('#fizzbuzz', () => {

	describe('args is not type of number', () => {

    it('throw Error', () => {
      expect(fizzbuzz('foo')).to.throw('args is not number type');
    })

	});

});
