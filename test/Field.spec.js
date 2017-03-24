import chai from 'chai';
import chaiAP from 'chai-as-promised';
chai.use(chaiAP);
const expect = chai.expect;

import Field from '../src/Field.js'

describe('class Field', function(){
  describe('constructor', function(){
    it('creates a field', function(){
      let f = new Field(2, 2);
      expect(f.area).to.eql([[null, null], [null, null]])
    })
  })
  describe('isValidSquare', function(){
    it('validates a square in the field', function(){
      let f = new Field(5, 5);
      expect(f.isValidSquare(0, 0)).to.equal(true);
      expect(f.isValidSquare(-1, 0)).to.equal(false);
      expect(f.isValidSquare(0, -1)).to.equal(false);
      expect(f.isValidSquare(4, 4)).to.equal(true);
      expect(f.isValidSquare(5, 4)).to.equal(false);
      expect(f.isValidSquare(4, 5)).to.equal(false);
    })
  })
  describe('getSquareValue', function(){
    it('gets the value of a square', function(){
      let f = new Field(5, 5)
      f.area = [
        [null, null, null, null, null],
        [null, "R", null, null, null],
        [null, null, null, null, null],
        [null, null, 0, 1, null],
        [null, null, null, 2, 3]
      ];
      expect(f.getSquareValue(0, 0)).to.equal(null);
      expect(f.getSquareValue(1, 1)).to.equal("R");
      expect(f.getSquareValue(3, 3)).to.equal(1);
      expect(f.getSquareValue(3, 2)).to.equal(0);
      expect(f.getSquareValue(4, 4)).to.equal(3);
      expect(f.getSquareValue(4, 3)).to.equal(2);
    })

  })
})
