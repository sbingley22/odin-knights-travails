class Node {
  constructor(input, value) {
    this.input = input;
    this.value = value;
  }
}

class Chess {
  constructor() {
    const rows = 8;
    const columns = 8;
    this.board = new Array(rows);

    for (let i = 0; i < rows; i++) {
      this.board[i] = new Array(columns);

      for (let j = 0; j < columns; j++) {
        this.board[i][j] = null;
      }
    }
  }

  resetBoard(){
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.board[i][j] = null;
      }
    }
  }

  knightMoves(start, end) {
    this.board[start[0]][start[1]] = new Node([-1, -1, start[0], start[1]]);
    const path = this.moveRec(this.getLegalMoves(start), end);
    this.resetBoard()
    console.log(path);
    return path
  }

  moveRec(positions, target) {
    if (positions.length === 0) {
      console.log("no length");
      return null;
    }

    const thisPos = positions.shift();
    const x = thisPos[0];
    const y = thisPos[1];
    const inx = thisPos[2];
    const iny = thisPos[3];

    if (this.board[x][y] == null) {
      this.board[x][y] = new Node([inx, iny], [x, y]);
      if (x == target[0] && y == target[1]) {
        const path = this.findPath(x, y);
        return path
      }
    }

    const nextMoves = this.getLegalMoves([x, y]);
    const nextPositions = [...positions, ...nextMoves];
    const path = this.moveRec(nextPositions, target);
    if (path) {
      return path;
    }
    return null;
  }

  findPath(x, y) {
    const path = [];
    path.push([x, y]);

    let input = this.board[x][y].input;
    while (input[0] != -1) {
      path.push([input[0], input[1]]);
      input = this.board[input[0]][input[1]].input;
    }

    return path;
  }

  getLegalMoves(pos) {
    const moves = [];
    const x = pos[0];
    const y = pos[1];

    let mx = x - 1;
    let my = y - 2;
    if (this.isLegal(mx, my)) moves.push([mx, my, x, y]);
    
    mx = x + 1;
    my = y - 2;
    if (this.isLegal(mx, my)) moves.push([mx, my, x, y]);
    
    mx = x - 2;
    my = y - 1;
    if (this.isLegal(mx, my)) moves.push([mx, my, x, y]);

    mx = x - 2;
    my = y + 1;
    if (this.isLegal(mx, my)) moves.push([mx, my, x, y]);

    mx = x - 1;
    my = y + 2;
    if (this.isLegal(mx, my)) moves.push([mx, my, x, y]);

    mx = x + 1;
    my = y + 2;
    if (this.isLegal(mx, my)) moves.push([mx, my, x, y]);
    
    mx = x + 2;
    my = y + 1;
    if (this.isLegal(mx, my)) moves.push([mx, my, x, y]);

    mx = x + 2;
    my = y - 1;
    if (this.isLegal(mx, my)) moves.push([mx, my, x, y]);

    return moves;
  }

  isLegal(x, y) {
    if (x >= 8 || x < 0) return false;
    if (y >= 8 || y < 0) return false;
    return true;
  }
}

const chess = new Chess();
let startSquare = [-1,-1]

const elements = () => {
  const content = document.querySelector("#content");
  const board = document.querySelector("#board");
  const squares = [];

  const colorSquare = (pos, color) => {
    squares[pos[0]][pos[1]].classList.add(color)
  }

  const removeSquareColors = () => {
    for (let i = 0; i < squares.length; i++) {
      for (let j = 0; j < squares[0].length; j++) {
        squares[i][j].classList.remove("red")
        squares[i][j].classList.remove("yellow")
        squares[i][j].classList.remove("green")
      }      
    }
  }

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

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      squares[i][j].addEventListener("click", () => {
        if (startSquare[0] == -1){
          removeSquareColors()
          startSquare = [i,j]
          colorSquare(startSquare, "red")
        }
        else {
          const moves = chess.knightMoves(startSquare, [i, j]);
          colorSquare([i,j], "green")
          for (let i = 1; i < moves.length -1; i++) {
            const element = moves[i];
            colorSquare(element, "yellow")
          }
          startSquare = [-1,-1]
        }
      });
    }
  }

  return { content, board, squares };
};


const el = elements();
//chess.knightMoves([0, 0], [3, 3]);
