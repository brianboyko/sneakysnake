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
  describe('setDirection()', function(){
    it('should change the direction', function(){
      let s = new Snake(4, 7);
      s.setDirection('u');
      expect(s.direction).to.equal('u');
      expect(s.path).to.eql([]);
      expect(s.initialPosition).to.eql({
        row: 4,
        column: 7
      })
    })
  })
  describe('first Move()', function(){
    it('should change the direction and push the path', function(){
      let s = new Snake(4, 7);
      s.firstMove('u');
      expect(s.direction).to.equal('u');
      expect(s.path).to.eql([{
        row: 4,
        column: 7,
        direction: 'u'
      }]);
    })
  })
  describe('getNextMove()', function(){
    it('should determine the next move', function(){
      let s = new Snake(4, 7);
      s.firstMove('u');
      expect(s.path).to.eql([{
        row: 4,
        column: 7,
        direction: 'u'
      }]);
      expect(s.getNextMove()).to.eql({
        row: 3,
        column: 7,
        direction: 'u'
      })
      s.setDirection('d');
      expect(s.getNextMove()).to.eql({
        row: 5,
        column: 7,
        direction: 'd'
      })
      s.setDirection('l');
      expect(s.getNextMove()).to.eql({
        row: 4,
        column: 6,
        direction: 'l'
      })
      s.setDirection('r');
      expect(s.getNextMove()).to.eql({
        row: 4,
        column: 8,
        direction: 'r'
      })
    })
  })
  describe('growSnake()', function(){
    it('should grow the snake', function(){
      let s = new Snake(4, 7);
      s.firstMove('u');
      expect(s.path).to.eql([{
        row: 4,
        column: 7,
        direction: 'u'
      }]);
      s.growSnake()
      expect(s.path).to.have.length(2);
      expect(s.path).to.eql([
        {row: 3, column: 7, direction: 'u'},
        {row: 4, column: 7, direction: 'u'},
      ])
      s.setDirection('l');
      s.growSnake();
      expect(s.path).to.have.length(3);
      expect(s.path).to.eql([
        {row: 3, column: 6, direction: 'l'},
        {row: 3, column: 7, direction: 'u'},
        {row: 4, column: 7, direction: 'u'},
      ])
    })
  })
  describe('moveSnake()', function(){
    it('should move, but not grow the snake', function(){
      let s = new Snake(4, 7);
      s.firstMove('u');
      s.growSnake()
      s.setDirection('l');
      s.growSnake();
      expect(s.path).to.have.length(3);
      expect(s.path).to.eql([
        {row: 3, column: 6, direction: 'l'},
        {row: 3, column: 7, direction: 'u'},
        {row: 4, column: 7, direction: 'u'},
      ])
      s.moveSnake();
      expect(s.path).to.eql([
        {row: 3, column: 5, direction: 'l'},
        {row: 3, column: 6, direction: 'l'},
        {row: 3, column: 7, direction: 'u'},
      ])
      s.setDirection('d');
      s.moveSnake();
      expect(s.path).to.eql([
        {row: 4, column: 5, direction: 'd'},
        {row: 3, column: 5, direction: 'l'},
        {row: 3, column: 6, direction: 'l'},
      ])
    })
  })
  describe('growSnake()/moveSnake integration', function(){
    it('should move snake and grow snake.', function(){
      let s = new Snake(4, 7);
      s.firstMove('u');
      s.growSnake()
      s.setDirection('l');
      s.growSnake();
      expect(s.path).to.have.length(3);
      expect(s.path).to.eql([
        {row: 3, column: 6, direction: 'l'},
        {row: 3, column: 7, direction: 'u'},
        {row: 4, column: 7, direction: 'u'},
      ])
      s.moveSnake();
      expect(s.path).to.eql([
        {row: 3, column: 5, direction: 'l'},
        {row: 3, column: 6, direction: 'l'},
        {row: 3, column: 7, direction: 'u'},
      ])
      s.setDirection('d');
      s.moveSnake();
      expect(s.path).to.eql([
        {row: 4, column: 5, direction: 'd'},
        {row: 3, column: 5, direction: 'l'},
        {row: 3, column: 6, direction: 'l'},
      ])
      s.growSnake();
      expect(s.path).to.have.length(4);
      expect(s.path).to.eql([
        {row: 5, column: 5, direction: 'd'},
        {row: 4, column: 5, direction: 'd'},
        {row: 3, column: 5, direction: 'l'},
        {row: 3, column: 6, direction: 'l'},
      ])
    })
  })
})
