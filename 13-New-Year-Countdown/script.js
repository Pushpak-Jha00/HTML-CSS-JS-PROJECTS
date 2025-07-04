const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const yearEl = document.querySelector(".year");
yearEl.innerHTML = new Date().getFullYear() + 1; // Set the

const newYear = new Date("1 Jan 2026 00:00:00").getTime();

function countdown() {
  const now = new Date().getTime();
  const gap = newYear - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  dayEl.innerHTML = days;
  hourEl.innerHTML = hours;
  minuteEl.innerHTML = minutes;
  secondEl.innerHTML = seconds;
}

setInterval(countdown, 1000);