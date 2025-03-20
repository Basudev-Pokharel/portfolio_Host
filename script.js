console.log("hello");
// let percentBox = document.getElementById("");
let topLine = document.getElementById("top-line");

const topButton = document.getElementById("topButton");
window.addEventListener("scroll", () => {
  console.log(window);
  console.log(document.documentElement.scrollHeight);
  console.log(document.documentElement.clientHeight);
  console.log(window.scrollY);
  let totalScroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let percent = (window.scrollY / totalScroll) * 100;
  topButton.style.background = `conic-gradient(green ${percent}%, white ${percent}%)`;
  topLine.style.width = `${percent}%`;
  topButton.addEventListener("click", () => {
    scroll(0, 0);
  });
});

function RunAuto() {
  scroll(0, document.documentElement.scrollHeight);
  setTimeout(() => {
    scroll(0, 0);
  }, 700);
}

// setInterval(() => {
//   RunAuto();
// }, 1500);
