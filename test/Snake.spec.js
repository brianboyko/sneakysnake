import chai from 'chai';
import chaiAP from 'chai-as-promised';
chai.use(chaiAP);
const expect = chai.expect;

import Snake from '../src/Snake.js'

describe('class Snake', function(){
  describe('constructor', function(){
    it('should create a snake', function(){
      let s = new Snake(4, 7);
      expect(s).to.be.an('object');
      expect(s.initialPosition).to.eql({
        row: 4,
        column: 7,
      });
      expect(s.path).to.eql([]);
      expect(s.direction).to.equal("stop")
    })
  })
})
