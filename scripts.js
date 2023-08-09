// on recuper tout les element 
var audio = document.querySelector("audio")
var track = document.querySelector("track")
var elapsed = document.querySelector("elapsed")
var trackTime = document.querySelector("track-time")
var volumeValue = document.querySelector("volume-value")
var volume = document.querySelector("volume")
var pauseBottone = document.querySelector("pause-bottone")
var playBottone = document.querySelector("play-bottone")
var stopBottone = document.querySelector("stop-bottone")
// on recupert la dure du mp3
let duration = audio.duration;

trackTime.textContent = buildDuration(duration);
 
// on gere le bottone play
playBottone.addEventListener("click", function(){
    pauseBottone.style.display = "initial";
    stopBottone.style.display = "initial";  
    this.style.display = "none";   
})

 
function buildDuration(duration){
    let minutes = Math.floor (duration /  60);
    let reste = duration % 60; 
    let secondes = Math.floor (reste); 
    secondes  = string(secondes).padStart (2, "0");
    return minutes + ":" + secondes;
}

