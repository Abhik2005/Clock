var secondStick = document.querySelector(".second-stick");
var minuteStick = document.querySelector(".minute-stick");
var hourStick = document.querySelector(".hour-stick");
var date = new Date();
var s = date.getSeconds() * 6;
var m = date.getMinutes() * 6;
m = m+6;
var h = date.getHours() * 30;
setInterval(function () {
  s = s + 6;
  secondStick.style.transform = `translate(-50%, -50%) rotate( ${s}deg)`;
}, 1000);
