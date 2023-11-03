const elements = () => {
  const content = document.querySelector("#content");
  const board = document.querySelector("#board");
  const squares = [];

  let black = false;
  for (let i = 0; i < 8; i++) {
    const temp = [];

    if (black) black = false;
    else black = true;

    for (let j = 0; j < 8; j++) {
      const div = document.createElement("div");
      div.id = "s" + i + j;
      div.classList.add("squares");

      if (black) {
        black = false;
        div.classList.add("black");
      } else black = true;

      temp.push(div);
      board.appendChild(div);
    }
    squares.push(temp);
  }

  return { content, board, squares };
};

class Node {
  constructor(input, output, value) {
    this.input = input;
    this.output = output;
    this.value = value;
  }
}

class Chess {
  constructor() {
    const rows = 8;
    const columns = 8;
    const board = new Array(rows);

    for (let i = 0; i < rows; i++) {
      array[i] = new Array(columns);

      for (let j = 0; j < columns; j++) {
        array[i][j] = null;
      }
    }
  }

  knightMoves(start, end) {
    this.moveRec(this.getLegalMoves(start), end);
  }

  moveRec(positions, target) {}

  getLegalMoves(pos) {
    const moves = [];
    const x = pos[0];
    const y = pos[1];
    let mx = x - 1;
    let my = y - 2;
    if (this.isLegal(mx, my)) moves.push([mx, my]);
    mx = x + 1;
    my = y - 2;
    if (this.isLegal(mx, my)) moves.push([mx, my]);
    mx = x - 2;
    my = y - 1;
    if (this.isLegal(mx, my)) moves.push([mx, my]);
    mx = x + 2;
    my = y - 1;
    if (this.isLegal(mx, my)) moves.push([mx, my]);
    mx = x - 2;
    my = y - 1;
    if (this.isLegal(mx, my)) moves.push([mx, my]);
    mx = x - 2;
    my = y + 1;
    if (this.isLegal(mx, my)) moves.push([mx, my]);
    mx = x - 1;
    my = y - 2;
    if (this.isLegal(mx, my)) moves.push([mx, my]);
    mx = x - 1;
    my = y + 2;
    if (this.isLegal(mx, my)) moves.push([mx, my]);

    return moves;
  }

  isLegal(x, y) {
    if (x >= rows || x < 0) return false;
    if (y >= columns || y < 0) return false;
    return true;
  }
}

const el = elements();
const chess = new Chess();
chess.knightMoves([0, 0], [3, 3]);
