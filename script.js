var typing_speed;
var Einstein_line = document.getElementById("Einstein").innerText;
var set_countdown_btn = document.getElementById("set_countdown_btn");

const timeArea = document.getElementById("space_to_display_time");

function update_clock(){
    const now = new Date();
    const time_now = now.toLocaleTimeString("en-US", { hour12: false }) + 
                  "." + now.getMilliseconds().toString().padStart(3, '0');

    timeArea.innerText = time_now;
}

// typewriter animation : imma add this later
function typewrite_Animation(){
    
}


function openCountdownDialogue(){

    console.log("clicked the button !");
    let deez = document.getElementById('buffer');
    deez.innerHTML = '<input type="date" id="ctdwnDate" class="dateInput">';

    getCtdwnDate();    
}

function getCtdwnDate(){
    var ctdwnDate = document.getElementById("ctdwnDate");

    ctdwnDate.addEventListener('change' , function(event){
        
        const date_in_normal = event.target.value;
        const date_in_obj = new Date(date_in_normal);
        const unix_time_in_ms = date_in_obj.getTime();

        console.log("the date is: " + date_in_normal);
        
        console.log("the date in seconds: " + unix_time_in_ms);
        console.log("the date in Object : " + date_in_obj);
        })
}

setInterval(update_clock , 1); 


set_countdown_btn.addEventListener("click" , openCountdownDialogue);