var secondStick = document.querySelector(".second-stick");
var minuteStick = document.querySelector(".minute-stick");
var hourStick = document.querySelector(".hour-stick");
  
setInterval(function(){
  var date = new Date();
var second = date.getSeconds();
var minute = date.getMinutes();
var hour = date.getHours();
var hour_rotation = hour*30 + minute/2;
var minute_rotation = minute*6;
var second_rotation = second*6;
secondStick.style.transform = `translate(-50%,-50%) rotate(${second_rotation}deg)`;
minuteStick.style.transform = `translate(-50%,-50%) rotate(${minute_rotation}deg)`;
hourStick.style.transform = `translate(-50%,-50%) rotate(${hour_rotation}deg)`;
},1000);

