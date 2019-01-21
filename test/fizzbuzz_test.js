'use strict'

const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const foo = require('../fizzbuzz')

describe('foo', () => {

  beforeEach(() => {
    const fizzbuzzSpy = sinon.spy(foo, 'fizzbuzz');
    const isValidArgsSpy = sinon.spy(foo, 'isValidArgs');
  });

  afterEach(() => {
    this.fizzbuzzSpy.restore();
    this.isValidArgsSpy.restore();
  });

  describe('#fizzbuzz', () => {

    it('call count', () => {
      foo.fizzbuzz(10);
      expect(fizzbuzzSpy.calledOnce).to.be.true;
    });

    it('isValidArgs call count', () => {
      foo.fizzbuzz(10);
      //console.log(isValidArgsSpy);
      //expect(isValidArgsSpy.calledOnce).to.be.true;
    })

  });

});
