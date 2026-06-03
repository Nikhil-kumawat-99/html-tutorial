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


function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-theme");
    
}


function hideallpages(){
    document.getElementById("homePage").style.display="none";
    document.getElementById("smartPage").style.display="none";
    document.getElementById("converterPage").style.display="none";
}

function sic_fic(){
        hideallpages();
        document.getElementById("smartPage").style.display="block";
    }

function goHome(){
        hideallpages();
        document.getElementById("homePage").style.display="block";
    }

function converter(){
        hideallpages();
        document.getElementById("converterPage").style.display="block";
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


   
    




// Script  for scientific calculator

    let display1=document.getElementById("display1");

    function press1(value){
        playSound();
        display1.value+=value;
    }

    function clearDisplay1(){
        playSound();
        display1.value="";
    }

    function backspace1(){
        playSound();
        display1.value=display1.value.slice(0,-1);
    }




    function calculate1(){
        playSound1();
        
        try{
            display1.value= Number(eval(display1.value)).toFixed(10);

            
        }
        catch{
            display1.value="Error..!";
        }       
    }



 // history
    let history1=[];

    function calculate1(){
        playSound1();
        try{
            let expression=display1.value;
            let result = Number(eval(expression).toFixed(10));
            display1.value=result;
            saveHistory1( expression , result );
            saveHistory( expression , result );
        }
        catch{
            display1.value="Error..!";
        }
    }

    
    function saveHistory1( expression , result){
        history1.push( expression + "=" + result);
        updateHistory1();
    }


    function updateHistory1(){
        const historylist= document.getElementById("historyList");
        historylist.innerHTML="";
        for(let i=0; i<history1.length; i++){
            const li= document.createElement("li");
            li.textContent=history1[i];
            historylist.appendChild(li);
        }
    }
  

    function clearHistory(){
        history1=[];
        updateHistory1();
    }


    function sign1(){
          playSound();
             if(display1.value){
             display1.value= -display1.value;
             }
   }


    function factorial(){
          playSound1();
          let num= parseInt(display1.value);
          if(num<0){
                 display1.value="Error..!";
             }
         else if(num===0 || num===1){
                  display1.value=1;
            }
         else{
                   let fact=1;
                for(let i=2; i<=num; i++){
                    fact*=i;
                     }
            display1.value= num + "! = " + fact;
            }
        try{
            let expression=display1.value;
            let result="";
            saveHistory1( expression , result );
            saveHistory( expression , result );
        }
        catch{
            display1.value="Error..!";
        }
    
    }


   


    function pi(){
        playSound();
        display1.value+=Math.PI;
      }

    function eluar(){
        playSound();
        display1.value+=Math.E;
     }


     function addValue(func){
        playSound();
        display1.value+= func + "(";
     }

    function sqrt(x){
        playSound1();
        return Math.sqrt(x);
       
    }

    function cbrt(x){
        playSound1();
        return Math.cbrt(x);
        
    }

    function log(x){
        playSound1();
        return Math.log10(x);
       
    }


    function ln(x){
        playSound1();
        return Math.log(x);
       
    }


    function sin(x){
        playSound();
        return Math.sin(x * Math.PI / 180);
    }

    function cos(x){
        playSound();
        return Math.cos(x * Math.PI / 180);
    }                   

    function tan(x){
        playSound();
        return Math.tan(x * Math.PI / 180);
    }


    function asin(x){
        playSound();
        return Math.asin(x) * 180 / Math.PI;
    }

    function acos(x){
        playSound();
        return Math.acos(x) * 180 / Math.PI;
    }

    function atan(x){
        playSound();
        return Math.atan(x) * 180 / Math.PI;
    }

    const alpha=document.querySelector("#fromUnit");
    const beta=document.querySelector("#toUnit");
    const gamma=document.querySelector(".convert");
    let from=alpha.value;
    let to=beta.value;

    // alpha.addEventListener("change",(e)=>{
    //    from=e.target.value;
    //    console.log(from);
    // });
    // beta.addEventListener("change",(e)=>{
    //     to=e.target.value;
    //     console.log(to);
    // });

    // console.log(to);
        alpha.addEventListener("change",(e)=>{
            alph(e.target);
        });
        beta.addEventListener("change",(e)=>{
            bet(e.target);
        });

    function alph(event){
        from=event.value;
    }
    function bet(event){
        to=event.value;
    }

    const enter=document.querySelector("#inputValue");
    const res=document.querySelector(".exchange");
    const resul=document.querySelector("#outputValue");
    (async function(){
        res.addEventListener("click",async()=>{
            const url=`https://api.unitconvr.com/v1/convert?from=${from}&to=${to}&value=${enter.value}&category=length`;
            const response=await fetch(url);
            const data=await response.json();
            let text=data.result;
            resul.value=`${enter.value} ${from} = ${text} ${to}`;
        });
    })();