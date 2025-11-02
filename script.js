var typing_speed;
var Einstein_line = document.getElementById("Einstein").innerText

const timeArea = document.getElementById("space_to_display_time");

function update_clock(){
    const now = new Date();
    const time_now = now.toLocaleTimeString("en-US", { hour12: false }) + 
                  "." + now.getMilliseconds().toString().padStart(3, '0');

    timeArea.innerText = time_now;
}

setInterval(update_clock , 1); 

// typewriter animation : imma add this later
function typewrite_Animation(){
    
}