const elements = () => {
  const content = document.querySelector("#content");
  const board = document.querySelector("#board");

  return { content, board };
};

const el = elements();
console.log(el.content);
