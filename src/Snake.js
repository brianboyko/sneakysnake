

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
    let r = this.path[0].row;
    let c = this.path[0].column;
    r += (this.direction === 'u') ? -1 : 0;
    r += (this.direction === 'd') ? 1 : 0;
    c += (this.direction === 'l') ? -1 : 0;
    c += (this.direction === 'r') ? 1 : 0;
    return ({
      direction: this.direction,
      row: r,
      column: c
    })
  }
  growSnake () {
    this.path.unshift(this.getNextMove());
  }
  moveSnake () {
    this.path.unshift(this.getNextMove());
    this.path.pop();
  }
}
