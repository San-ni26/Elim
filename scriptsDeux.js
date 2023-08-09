    
    var audioDeux = document.getElementById("audioDeux")
    var trackDeux = document.getElementById("trackDeux")
    var playBottoneDeux  = document.getElementById("playBottoneDeux")
    var pauseBottoneDeux  = document.getElementById("pauseBottoneDeux")
    var elapsedDeux = document.querySelector("elapsedDeux")
    var trackTimeDeux = document.querySelector("trackTimeDeux")
    playBottoneDeux.onclick = function(){
        if(audioDeux.paused){
            audioDeux.play();
            playBottoneDeux.src = "icon/pause.svg" 
        } else{
            audioDeux.pause();
            playBottoneDeux.src = "icon/play.svg" 
        } 
        
    }
    pauseBottoneDeux.onclick = function(){
        if(audioDeux.play){
            audioDeux.pause(); 
            audioDeux.currentTime = 0;
            playBottoneDeux.src = "icon/play.svg"  
        }
    } 

    

    audioDeux.addEventListener("timeupdate", function(){
        trackDeux.value = this.currentTime;
        elapsedDeux.textContent = buildDuration (this.currentTime);
    })


