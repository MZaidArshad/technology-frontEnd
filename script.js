const blue = document.getElementById("blue");
const purple = document.getElementById("purple");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
const red = document.getElementById("red");

let r = document.querySelector(":root");

blue.addEventListener("click", function () {
  r.style.setProperty("--main-color", "#00b9f7");
  r.style.setProperty("--hover-color", "#0093c4");
  r.style.setProperty("--focus-color", "#00b9f7");
});
purple.addEventListener("click", function () {
  r.style.setProperty("--main-color", "#8600c8");
  r.style.setProperty("--hover-color", "#560181");
  r.style.setProperty("--focus-color", "#8600c8");
});

orange.addEventListener("click", function () {
  r.style.setProperty("--main-color", "#ea8825");
  r.style.setProperty("--hover-color", "#b16519");
  r.style.setProperty("--focus-color", "#ea8825");
});

green.addEventListener("click", function () {
  r.style.setProperty("--main-color", "#00ab66");
  r.style.setProperty("--hover-color", "#02804d");
  r.style.setProperty("--focus-color", "#00ab66");
});

yellow.addEventListener("click", function () {
  r.style.setProperty("--main-color", "#e5c41a");
  r.style.setProperty("--hover-color", "#b39608");
  r.style.setProperty("--focus-color", "#e5c41a");
});

red.addEventListener("click", function () {
  r.style.setProperty("--main-color", "#f25454");
  r.style.setProperty("--hover-color", "#bd3737");
  r.style.setProperty("--focus-color", "#f25454");
});

let themeSetting = document.getElementById("setting-icon");
let addClass = document.getElementById("setting");
themeSetting.addEventListener("click", showSetting);

function showSetting() {
  addClass.classList.toggle("theme-setting-show");
}

let sIcon = document.getElementById("s-icon");

var deg = 0;
setInterval(() => {
  sIcon.style.transform = "rotate(" + deg + "deg)";
  deg = (deg + 10) % 360;
}, 100);

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// c_day means current day

setInterval(() => {
  let today = new Date();
  let c_day = today.getDate();
  let c_hour = today.getHours();
  let c_min = today.getMinutes();
  let c_sec = today.getSeconds();

  if (c_hour > 12) {
    c_hour -= 12;
  }

  c_day = c_day < 10 ? "0" + c_day : c_day;
  c_hour = c_hour < 10 ? "0" + c_hour : c_hour;
  c_min = c_min < 10 ? "0" + c_min : c_min;
  c_sec = c_sec < 10 ? "0" + c_sec : c_sec;

  days.innerHTML = c_day;
  hours.innerHTML = c_hour;
  minutes.innerHTML = c_min;
  seconds.innerHTML = c_sec;
}, 1000);
