window.onload = () => {
  let step = 0;
  const MAX_STEP_LIMIT = 350; // 350px, moving at 1px per millisecond

  const myMove = () => {
    if (step >= MAX_STEP_LIMIT) {
      /* https://www.samanthaming.com/tidbits/40-colorful-console-message/ */
      console.log(`%cAnimation complete!`, `background: #222; color: #bada55;`);
      alreadyDone = true;
      clearInterval(2); // Second interval always has ID of 1, so this is an easy solution here
    } else {
      let animateTarget = document.getElementById("animate");
      animateTarget.style = "margin-left:" + step + "px;"; // <!> WARNING: INSANELY UGLY HACK
      step++;
      console.log(`%c Step ${step} of ${MAX_STEP_LIMIT}...`, "color: red;");
    }
  };

  const startButton = document.getElementById("clickThis");
  startButton.addEventListener("click", () => {
    if (step >= MAX_STEP_LIMIT) {
      clearInterval(2);
    } else {
      setInterval(() => {
        myMove();
      }, 5);
    }
  });

  // Theoretical.
  //   const infiniteLoop = () => {
  //     let animateTarget = document.getElementById("animate");
  //     animateTarget.style = "margin-left:" + step + "px;";
  //     step++;
  //     if (step >= MAX_STEP_LIMIT) {
  //       step = 0;
  //     }
  //   };
};
