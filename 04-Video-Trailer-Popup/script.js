const btnEl = document.querySelector('.btn');
const closeBtn = document.querySelector('.close-icon');
const trailerContainerEl = document.querySelector('.trailer-container');
const viderEl = document.querySelector('video');

btnEl.addEventListener('click', ()=>{
  trailerContainerEl.classList.remove('active');
});

closeBtn.addEventListener('click', ()=>{
  trailerContainerEl.classList.add('active');
  viderEl.pause();
  viderEl.currentTime = 0;
});