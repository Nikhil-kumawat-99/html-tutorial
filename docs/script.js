let display=document.getElementById("display");
let sound= document.getElementById("clicksound");
let sound1= document.getElementById("clicksound1");

function playSound(){
    sound.currentTime=0;
    sound.play();
}
function playSound1(){
    sound1.currentTime=0;
    sound1.play();
}

function press(value){
    playSound();
    display.value+=value;
}

function clearDisplay(){
    playSound();
    display.value="";
}

function backspace(){
    playSound();
    display.value=display.value.slice(0,-1);
}

function calculate(){
    playSound1();
    try{
        display.value= eval(display.value);
    }
    catch{
        display.value="Error..!";
    }
}

function sign(){
    playSound();
    if(display.value){
        display.value= -display.value;
    }
}

function toggleNotes() {
    const panel = document.getElementById("notesPanel");
    panel.classList.toggle("active");
}


function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}


function toggleHistory() {
    const sidebar1 = document.getElementById("sidebar1");
    const overlay1 = document.getElementById("overlay1");

    sidebar1.classList.toggle("active");
    overlay1.classList.toggle("active");
}



    // history
    let history=[];

    function calculate(){
        playSound1();
        try{
            let expression=display.value;
            let result = eval(expression);
            display.value=result;
            saveHistory( expression , result );
        }
        catch{
            display.value="Error..!";
        }
    }

    
    function saveHistory( expression , result){
        history.push( expression + "=" + result);
        updateHistory();
    }


    function updateHistory(){
        const historylist= document.getElementById("historyList");
        historylist.innerHTML="";
        for(let i=0; i<history.length; i++){
            const li= document.createElement("li");
            li.textContent=history[i];
            historylist.appendChild(li);
        }
    }
  

    function clearHistory(){
        history=[];
        updateHistory();
    }
