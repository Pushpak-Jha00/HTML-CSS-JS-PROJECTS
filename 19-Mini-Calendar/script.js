const monthNameEl = document.getElementById('month-name');
const dayNameEl = document.getElementById('day-name');
const dayNumberEl = document.getElementById('day-number');
const yerEl = document.getElementById('year');

const date = new Date();
const month = date.getMonth();

monthNameEl.innerText = date.toLocaleDateString('hi' ,{
  month:'long'
})

dayNameEl.innerText = date.toLocaleDateString('hi',{
  weekday:'long'
});

dayNumberEl.innerText = date.getDate();

yerEl.innerText = date.getFullYear();


