// https://stackoverflow.com/a/60077577
window.onload = () => {
  let steps = 0;

  /*
   * Part I
   * In your Javascript file, using setTimeout, call a function after 2 seconds.
   * The function will alert “Hello World”.
   */
  const helloWorld = () => {
    console.log("hello, world!");
  };

  setTimeout(() => {
    helloWorld();
  }, 2000);

  /*
   * Part II
   * In your Javascript file, using setTimeout, call a function after 2 seconds.
   * The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
   */
  const addParagraphToBody = () => {
    let target = document.getElementById("container");
    let para = document.createElement("p");
    para.textContent = "Hello, world!";
    target.appendChild(para);
  };

  setTimeout(() => {
    addParagraphToBody();
  }, 2000);

  /*
   * Part III
   * In your Javascript file, using setInterval, call a function every 2 seconds.
   * The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
   * The interval will be cleared (ie. clearInterval), when the user will click on the button.
   * Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
   */
  const addParagraphAndClearInterval = () => {
    let para = document.createElement("p");
    para.textContent = "Hello World";
    let target = document.getElementById("container");
    target.appendChild(para);
  };

  setInterval(() => {
    addParagraphAndClearInterval();
    steps++;
    if (steps >= 5) clearInterval(3);
  }, 2000);

  const clearCurrentInterval = () => {
    console.log("Interval cleared!");
    clearInterval(3);
  };

  // Let user cancel our interval with THE BUTTON
  const cancelButton = document.getElementById("clear");
  cancelButton.addEventListener("click", () => {
    clearCurrentInterval();
  });
};

/* ============ OLD STUFF ============ */

// There are better ways to do this for sure but this works for now
//   const TEST_IMAGE_SRC =
//     "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/440px-Flag_of_the_United_States.svg.png";

//   Image test
//   let img = document.createElement("img");
//   let target = document.getElementById("container");
//   img.src = TEST_IMAGE_SRC;
//   target.appendChild(img);
