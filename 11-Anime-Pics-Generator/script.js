const btnElement = document.getElementById("btn");
const animeContainer = document.querySelector(".anime-container");
const animeNameElement = document.querySelector(".anime-name");
const animeImageElement = document.querySelector(".anime-img");

btnElement.addEventListener("click", async function () {
  try {
    btnElement.disabled = true;
    btnElement.innerText = "Loading...";
    animeNameElement.textContent = "Updating...";
    animeImageElement.src = "spinner.svg"; // Show a loading spinner
    const apiUrl = await fetch("https://nekos.best/api/v2/neko");
    if (!apiUrl.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await apiUrl.json();
    btnElement.disabled = false;
    btnElement.innerText = "Get Anime";
    // console.log(data);

    animeContainer.style.display = "block";
    animeImageElement.src = data.results[0].url;
    animeNameElement.textContent = data.results[0].artist_name;
  } catch (error) {
    console.error("Error fetching anime data:", error);
    btnElement.disabled = false;
    btnElement.innerText = "Get Anime";
     animeNameElement.textContent = "Failed to load anime data try again later.";
  }
});
