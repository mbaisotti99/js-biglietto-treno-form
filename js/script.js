
let psngrName = document.getElementById("name");

let psngrKms = document.getElementById("kms");

let psngrAge = document.getElementById("age");

let sub = document.getElementById("sendIt");

let clear = document.getElementById("clear");


let tktCard = document.getElementById("ticket");
let tktName = document.getElementById("passName");
let tktOff = document.getElementById("passOff");
let tktClass = document.getElementById("passClass");
let tktCp = document.getElementById("passTick");
let tktCost = document.getElementById("passCost");


sub.addEventListener("submit", function(event) {
    event.preventDefault(); //Non va
    
    let minorenne = false;
    let over = false;
    
    // NOME 
    
    tktName.innerHTML = psngrName.value.trim();
    
    // ETA'
    
    let offer = "Standard";

    if (psngrAge.value == "minor"){
        minorenne = true;
        offer = "Minorenne"
    } else if (psngrAge.value == "over"){
        over = true;
        offer  = "-40%"
    }

    tktOff.innerHTML =  offer;

    // Classe     
    
    let passClass = Math.floor(Math.random() * 3 + 1);

    tktClass.innerHTML = passClass + "°";

    // Codice CP 
    
    let cpCode = "#" + Math.floor(Math.random() * 99999 + 1);

    tktCp.innerHTML = cpCode;

    let cost = (parseInt(psngrKms.value.trim()) * 0.21);
    if (minorenne){
        cost -= (cost/100)*20  
    } else if (over){
        cost -= (cost/100)*40
    } 
    tktCost.innerHTML = cost.toFixed(2) + "€";
        
    

    tktCard.classList.remove("d-none");
})

clear.addEventListener("click", function(event) {
    event.preventDefault();

    form.reset;
})