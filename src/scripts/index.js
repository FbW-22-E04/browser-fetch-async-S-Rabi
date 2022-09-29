import "../styles/main.scss";
import "babel-polyfill";

const modal = document.getElementById("myModal");
let promiseOfModal = new Promise(function (resolve) {
  window.setTimeout(function () {
    resolve(modal);
  }, 1000 * 60);
});

// promiseOfModal.then(function (val) {
//   console.log("User has been on the page for 60 seconds");
//   val.style.display = "block";
// });

// part 1:
async function promiseFunc() {
  let val = await promiseOfModal;
  console.log("User has been on the page for 60 seconds");
  val.style.display = "block";
}
promiseFunc();

modal.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "close":
    case "modal":
      modal.style.display = "none";
      break;
  }
});

// part 3: first way

// async function promiseBtn() {
//   let promise2 = new Promise(function (resolve) {
//     window.setTimeout(function () {
//       let btn = document.querySelector("#continue");
//       resolve(btn);
//     }, 400);
//   });
//   let val = await promise2;
//   alert("Continue to subscribe");
//   val.style.backgroundColor = "teal";
// }
// promiseBtn();
// const btn = document
//   .querySelector("#continue")
//   .addEventListener("mouseover", (hover) => {
//     promiseBtn();
//   });

// part 3: professional way
function colorGenerator() {
  let r = Math.floor(Math.random() * 256).toFixed(0);
  let g = Math.floor(Math.random() * 256).toFixed(0);
  let b = Math.floor(Math.random() * 256).toFixed(0);
  let a = Math.random().toFixed(3);
  return `rgba(${r},${g},${b},${a})`;
}

let btn = document.querySelector("#continue");
async function promiseBtn() {
  await btn.getAnimations()[0].finished;
  alert("Continue to subscribe");
  btn.style.backgroundColor = colorGenerator();
}
document
  .querySelector("#continue")
  .addEventListener("mouseover", (hover) => promiseBtn());
