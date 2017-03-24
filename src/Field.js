export default class Field {
  constructor(rows, columns) {
    this.area = new Array(rows)
      .fill(new Array(columns).fill(null));
  }
  isValidSquare (r, c) {
    return r >= 0 && c >= 0 && r < this.area.length && c < this.area[0].length;
  }
  getSquareValue (r, c) {
    return this.area[r][c];
  }
}
