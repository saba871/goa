// start
document.getElementById("start").addEventListener("click", () => {
  let user = parseInt(prompt("Enter a number:"));

  let seconds = 0;
  const timer = setInterval(() => {
    seconds++;
    document.getElementById(
      "paragraph"
    ).textContent = `last second: ${seconds}`;

    if (seconds === user) {
      clearInterval(timer);
    }
  }, 1000);
});

// pause
document.getElementById("pause").addEventListener("click", () => {
  clearInterval(timer);
  document.getElementById("paragraph").textContent = `last second: ${timer}`;
});

// reset
document.getElementById("reset").addEventListener("click", () => {
  seconds = 0;
  document.getElementById("paragraph").textContent = `last second: ${seconds}`;
});
