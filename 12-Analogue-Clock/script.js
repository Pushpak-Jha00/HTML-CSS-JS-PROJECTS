const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');

function updateClock() {
    const now = new Date();
    // setTimeout(updateClock, 1000);
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hoursDegrees = ((hours / 12) * 360);
    const minutesDegrees = ((minutes / 60) * 360);
    const secondsDegrees = ((seconds / 60) * 360);

    hourElement.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteElement.style.transform = `rotate(${minutesDegrees}deg)`;
    secondElement.style.transform = `rotate(${secondsDegrees}deg)`;  
}

setInterval(updateClock, 1000);