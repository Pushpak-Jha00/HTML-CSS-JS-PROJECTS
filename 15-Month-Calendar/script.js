const monthEl = document.querySelector('.date h1');
const dateEl = document.querySelector('.date p');
const daysEl = document.querySelector('.days');


const monthIndx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear() , monthIndx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear() , monthIndx, 1).getDay() -1;

console.log(lastDay, firstDay);


const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

monthEl.innerText = months[monthIndx];
dateEl.innerText = new Date().toDateString();


let days = '';

for(let i = firstDay; i >0; i--){
  days += `<div class='empty'></div>`
}

for(let i = 1; i<= lastDay; i++){
  if(i === new Date().getDate()){
    days += `<div class='today'>${i}</div>`
  }else{
    days += `<div>${i}</div>`
  }
}

daysEl.innerHTML = days;




