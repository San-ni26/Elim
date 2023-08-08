// on recuper tout les element 
const audio = document.querySelector("audio");
const track = document.querySelector("#track");
const elapsed = document.querySelector("#elapsed");
const trackTime = document.querySelector("#track-time");
const volumeValue = document.querySelector("#volume-value");
const volume = document.querySelector("#volume");
const pauseBottone = document.querySelector("#pause-bottone");
const playBottone = document.querySelector("#play-bottone");
const stopBottone = document.querySelector("#stop-bottone");
// on recupert la dure du mp3
let duration = audio.duration ;
buiIdDuration(duration);
 
function buiIdDuration(duration){
    let minutes = Math.floor (duration /  60);
    let reste = duration % 60; 
    let secondes = Math.floor (reste); 
    secondes  = string(secondes).padStart (2, "0");
    return minutes + ":" + secondes;
}

