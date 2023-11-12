const paragraph = document.querySelector("p");
const para = document.querySelector("p");
const button = document.querySelector("button");

function rando() {
  let numbers = [];
  let nr;
  //while (numbers.length < 6) {
  while (numbers.length < 5) {
    // (nr = Math.floor(Math.random() * 10)),
    //nr = Math.floor(Math.random() * (46 - 1 + 1));
    nr = Math.floor(Math.random() * (91 - 1 + 1));
    numbers.includes(nr) || nr <= 0 || nr > 90 ? nr : numbers.push(nr);
  }
  document.getElementById("random").innerHTML = numbers.join(" - ");
  console.log(numbers);
}
const random = (nr) => {
  //nr = Math.random();
};
// let sampleEle = document.querySelector(".sample");
// sampleEle.addEventListener("keyup", (event) => {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     document.querySelector("button").click();
//   }
// });
//para.innerHTML = para.innerHTML;

window.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
});

button.addEventListener("click", rando);
//button.addEventListener("en", rando);
// paragraph.innerHTML = paragraph.innerHTML
//   .split(" ")
//   .map((pa) => {
//     return pa.length > 8
//       ? `<span style = "background-color: yellow">${pa}</span>`
//       : pa;
//   })
//   .join(" ");
