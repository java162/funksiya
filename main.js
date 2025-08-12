let lbtn = document.querySelector(".lbtn");
let dbtn = document.querySelector(".dbtn");
let body = document.querySelector("body");
let p = document.querySelector(".p");
let nav = document.querySelector(".van");

lbtn.addEventListener("click", () => {
  body.style.background = "white";
  body.style.color = "black";
  p.style.color = "black";
  nav.style.background = "white";
});
dbtn.addEventListener("click", () => {
  body.style.background = "black";
  body.style.color = "white";
  p.style.color = "white";
  nav.style.background = "black";
});

let a = document.querySelector(".a");
let b = document.querySelector(".b");
let d = document.querySelector(".d");
let e = document.querySelector(".e");
let f = document.querySelector(".f");
let g = document.querySelector(".g");
let h = document.querySelector(".h");
let j = document.querySelector(".j");
let k = document.querySelector(".k");
let l = document.querySelector(".l");

let play1 = document.getElementById("play1");
let pause1 = document.getElementById("pause1");

let play2 = document.getElementById("play2");
let pause2 = document.getElementById("pause2");

let play3 = document.getElementById("play3");
let pause3 = document.getElementById("pause3");

let play4 = document.getElementById("play4");
let pause4 = document.getElementById("pause4");
let play5 = document.getElementById("play5");
let pause5 = document.getElementById("pause5");

let play6 = document.getElementById("play6");
let pause6 = document.getElementById("pause6");

let play7 = document.getElementById("play7");
let pause7 = document.getElementById("pause7");

let play8 = document.getElementById("play8");
let pause8 = document.getElementById("pause8");

let play9 = document.getElementById("play9");
let pause9 = document.getElementById("pause9");

let play10 = document.getElementById("play10");
let pause10 = document.getElementById("pause10");
play1.addEventListener("click", () => {
  a.play();
});
pause1.addEventListener("click", () => {
  a.pause();
});

play2.addEventListener("click", () => {
  b.play();
});
pause2.addEventListener("click", () => {
  b.pause();
});

play3.addEventListener("click", () => {
  d.play();
});
pause3.addEventListener("click", () => {
  d.pause();
});

play4.addEventListener("click", () => {
  e.play();
});
pause4.addEventListener("click", () => {
  e.pause();
});

play5.addEventListener("click", () => {
  f.play();
});
pause5.addEventListener("click", () => {
  f.pause();
});

play6.addEventListener("click", () => {
  g.play();
});
pause6.addEventListener("click", () => {
  g.pause();
});

play7.addEventListener("click", () => {
  h.play();
});
pause7.addEventListener("click", () => {
  h.pause();
});
play8.addEventListener("click", () => {
  j.play();
});
pause8.addEventListener("click", () => {
  j.pause();
});
play9.addEventListener("click", () => {
  k.play();
});
pause9.addEventListener("click", () => {
  k.pause();
});
play10.addEventListener("click", () => {
  l.play();
});
pause10.addEventListener("click", () => {
  l.pause();
});
