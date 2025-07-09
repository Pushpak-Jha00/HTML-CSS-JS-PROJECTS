const searchBarContainerEl = document.querySelector('.search-bar-container');

const magnifireEl = document.querySelector('.magnifire');

magnifireEl.addEventListener("click" , ()=>{
  searchBarContainerEl.classList.toggle('active')
})