const btnEl = document.getElementById('btn');
const emojiNameEl = document.getElementById('emoji-name');


const emoji = [];

async function getEmoji(){
  let response = await fetch('https://emoji-api.com/emojis?access_key=956389ef3634fc367beac0afc1b769a8e466fad3');

  const  data = await response.json();

  for(i = 0; i<1500; i++){
    emoji.push({
      emojiName: data[i].character,
      emojiCode:data[i].unicodeName
    })
  }
  
}
getEmoji();


btnEl.addEventListener('click', ()=>{
  const randomNumber = Math.floor(Math.random() *1500)
  
  btnEl.innerText = emoji[randomNumber].emojiName;
  emojiNameEl.innerText = emoji[randomNumber].emojiCode;
  
  
} )