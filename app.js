const countdown = () =>{
const countDate = new Date('July 26 2024 00:00:00').getTime()
console.log(countDate);
const now = new Date().getTime();
const gap = countDate - now;

//time conversions

const second = 1000;
const minute = second * 60;
hour = minute * 60
day = hour * 24;

//calculate using modulus

const textDay = Math.floor(gap / day);
const textHour = Math.floor((gap % day) / hour);
const textMinute = Math.floor((gap % hour) / minute);
const textSecond = Math.floor((gap % minute) / second);

//connect to HTML to js variables 

document.querySelector(".day").innerText = textDay;
document.querySelector(".minute").innerText = textHour;
document.querySelector(".hour").innerText = textMinute;
document.querySelector(".second").innerText = textSecond;

};

//refresh function coutdown every second to show changes in JS variables

setInterval(countdown, 1000);

