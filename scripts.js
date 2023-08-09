    
    var audio = document.getElementById("audio")
    var track = document.getElementById("track")
    var playBottone  = document.getElementById("playBottone")
    var pauseBottone  = document.getElementById("pauseBottone")
    var elapsed = document.querySelector("elapsed")
    var trackTime = document.querySelector("trackTime")
    playBottone.onclick = function(){
        if(audio.paused){
            audio.play();
            playBottone.src = "icon/pause.svg" 
        } else{
            audio.pause();
            playBottone.src = "icon/play.svg" 
        } 
        
    }
    pauseBottone.onclick = function(){
        if(audio.play){
            audio.pause(); 
            audio.currentTime = 0;
            playBottone.src = "icon/play.svg"  
        }
    } 

    

    audio.addEventListener("timeupdate", function(){
        track.value = this.currentTime;
        elapsed.textContent = buildDuration (this.currentTime);
    })


