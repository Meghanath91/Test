/**
 * Class representing Connect4 game
 * @class Connect4
 */
class Connect4 {
  /**
   * constructs all global variable
   */
  constructor() {
    this.board = new Array(6).fill(0).map(() => new Array(7).fill(0));
    this.currentPlayer = 1;
    this.winner = null;
    this.moves = 0;
  }
  /**
   * Check if a column is full
   * @method checkColumnFull
   * @param {number} column
   * @return {boolean}
   */
  checkColumnFull(column) {
    try {
      let row = 0;
      while (this.board[row][column] !== 0) {
        if (row === 5) return true;
        row++;
      }
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Check if a player win by filling horizontally or vertically
   * @method checkForWinHorizontalVertical
   * @return {boolean}
   */
  checkForWinHorizontalVertical() {
    try {
      let p = this.currentPlayer;
      let horizontal = 0;
      let vertical = {};
      for (let row = 5; row > 0; row--) {
        for (let column = 0; column < 7; column++) {
          if (vertical[column] === undefined) vertical[column] = 0;
          vertical[column] =
            this.board[row][column] === p ? (vertical[column] += 1) : 0;
          horizontal = this.board[row][column] === p ? (horizontal += 1) : 0;
          if (horizontal === 4 || vertical[column] === 4) {
            return true;
          }
        }
      }
      return false;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Check if a player win by filling Diagonally
   * @method checkForWinDiagonal
   * @return {boolean}
   */
  checkForWinDiagonal() {
    try {
      let p = this.currentPlayer;
      for (let row = 5; row > 2; row--) {
        for (let column = 0; column < 3; column++) {
          if (
            this.board[row][column] === p &&
            this.board[row - 1][column + 1] === p
          ) {
            if (
              this.board[row - 2][column + 2] === p &&
              this.board[row - 3][column + 3]
            ) {
              return true;
            }
          }
        }
        for (let column = 6; column > 3; column--) {
          if (
            this.board[row][column] === p &&
            this.board[row - 1][column - 1] === p
          ) {
            if (
              this.board[row - 2][column - 2] === p &&
              this.board[row - 3][column - 3] === p
            ) {
              return true;
            }
          }
        }
      }
      return false;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * add value to column
   * @method addToColumn
   * @return {undefined}
   */
  addToColumn(column) {
    try {
      let row = 5;
      while (this.board[row][column] === 1 || this.board[row][column] === 2) {
        row--;
      }
      this.board[row][column] = this.currentPlayer;
      this.moves += 1;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * add value to column
   * @method confirmWinner
   * @return {string}
   */
  confirmWinner() {
    try {
      this.winner = this.currentPlayer;
      return `Player ${this.currentPlayer} wins!`;
    } catch (err) {
      console.log(err);
    }
  }
  /**
   * add value to column
   * @method play
   * @return {method}
   */
  play(column) {
    try {
      if (this.winner) return "Game has finished!";
      if (this.checkColumnFull(column)) return "Column full!";
      this.addToColumn(column);
      if (this.moves > 6) {
        if (this.checkForWinHorizontalVertical()) {
          return this.confirmWinner();
        }
        if (this.checkForWinDiagonal()) {
          return this.confirmWinner();
        }
      }

      this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
      let recentPlayer = this.currentPlayer === 1 ? 2 : 1;
      return `Player ${recentPlayer} has a turn`;
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = Connect4;
