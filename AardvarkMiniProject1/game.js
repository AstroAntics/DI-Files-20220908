// User options are reset when page is reloaded
let userOptions = {
  lastChosenColor: null,
  currentColor: null,
};

console.log("Welcome to the Coloring Game!");
console.log(userOptions);

const clearAllColors = () => {
  if (
    userOptions.lastChosenColor !== null &&
    userOptions.currentColor !== null
  ) {
    userOptions.lastChosenColor = null;
    userOptions.currentColor = null;
  }
  console.log("Colors cleared!");
};
