

export default class Snake {
  constructor(row, column){
    this.initialPosition = {row, column}
    this.path = [];
    this.direction = 'stop';
  }
  firstMove (direction) {
    this.setDirection(direction);
    this.path.push(Object.assign(this.initialPosition, {direction: this.direction}));
  }
  setDirection (direction) {
    this.direction = direction;
  }
  getNextMove () {
    if(this.direction === 'u'){
      return Object.assign(this.path[0], {row: this.path[0].row - 1, direction: this.direction});
    }
    if(this.direction === 'd'){
      return Object.assign(this.path[0], {row: this.path[0].row + 1, direction: this.direction});
    }
    if(this.direction === 'l'){
      return Object.assign(this.path[0], {column: this.path[0].column - 1, direction: this.direction});
    }
    if(this.direction === 'r'){
      return Object.assign(this.path[0], {column: this.path[0].column + 1, direction: this.direction});
    }
  }
  moveSnake () {
    this.path.unshift(getNextMove());
    this.path.pop();
  }
  growSnake () {
    this.path.unshift(getNextMove());
  }
  isGameOver (field) {
    // snake runs off field.
    if (!field.isValidSquare(this.path[0].row, this.path[0].column)){
      return true;
    }
    // snake eats itself.
    return this.path.reduce((pv, cv) => pv || (this.path[0].row === cv.path.row && this.path[0].column === cv.path.column), false)
  }
}
