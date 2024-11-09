
let psngrName = document.getElementById("name");

let psngrKms = document.getElementById("kms");

let psngrAge = document.getElementById("age");

let sub = document.getElementById("send");

let clear = document.getElementById("clear");



let tktName = document.getElementById("passName");
let tktOff = document.getElementById("passOff");
let tktClass = document.getElementById("passClass");
let tktCp = document.getElementById("passTick");
let tktCost = document.getElementById("passCost");


sub.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let minorenne = false;
    let over = false;
    
    // NOME 
    
    tktName.innerHTML = psngrName;
    
    // ETA'
    
    tktOff.innerHTML = () => {
        if (parseInt(psngrAge) < 18){
            minorenne = true;
            return "-20%"
        } else if (parseInt(psngrAge) > 65){
            over = true;
            return "-40%"
        } else {
            return "Standard"
        }
    }
    
    tktClass.innerHTML = () => Math.floor(Math.random() * 3 + 1)
    
    
    
    

})

clear.addEventListener("click", function(event) {
    event.preventDefault;

    form.reset;
})