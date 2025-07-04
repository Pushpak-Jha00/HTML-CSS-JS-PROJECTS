const inputEl = document.getElementById("input");
const infoText = document.getElementById("info-text");
const meaningContainer = document.getElementById("meaning-container");

inputEl.addEventListener("keyup", (e) => {
  
  if(e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
    // e.target.value = "";
  }
})

fetchAPI = async (word) => {
  try {
    infoText.style.display = "block";
    meaningContainer.style.display = "none";
    infoText.innerHTML = `Searching the meaning of "${word}"...`;
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

    if (!response.ok) {
      throw new Error("Word not found");
    }
    const data = await response.json();

    console.log(data);
    

    const titleEl = document.getElementById("title");
    const meaningEl = document.getElementById("meaning");
    const audioEl = document.getElementById("audio");

    const yourWord = data[0].word;
    const audio = data[0].phonetics[0]?.audio || "No audio available";
    const meanings = data[0].meanings[0].definitions[0].definition;    

    meaningContainer.style.display = "block";
    infoText.style.display = "none";

    titleEl.innerHTML = yourWord;
    meaningEl.innerHTML = meanings;
    if(audio === "No audio available") {
      audioEl.style.display = "none";
    }
    audioEl.src = audio;
    infoText.innerHTML = "Enter a word to get its meaning";
    
  } catch (error) {
    alert("Word not found, please try another word.");
    console.error("Error fetching the word:", error);
    infoText.innerHTML = "Enter a word to get its meaning";
  }
  
}