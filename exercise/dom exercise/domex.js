let a = document.getElementsByClassName("box");
console.log(a);
function getRandomcolor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1},${val2},${val3} )`;
}
document.querySelectorAll(".box").forEach((fill) => {
  fill.style.backgroundColor = getRandomcolor();
});

document.querySelectorAll(".box").forEach((fill) => {
  fill.style.color = getRandomcolor();
});
