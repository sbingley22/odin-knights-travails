/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

const el = elements();
console.log(el.squares);

/******/ })()
;
//# sourceMappingURL=main.js.map