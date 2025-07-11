const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
const lenVal = document.querySelector("#length-value");
const input = document.querySelector("#length");
lenVal.textContent = input.value;

input.addEventListener("input", (event) =>{
    lenVal.textContent = event.target.value;
})

function length(){
    return lenVal.textContent;
}

function gen(val = length()){
    let result = "";
    for(let i = 0 ;i < val; i++ ){
        result += characters[Math.floor(Math.random() * characters.length)];
    }
    return result;
}

function genTime(){
    document.querySelector("#gen1").textContent = gen();
    document.querySelector("#gen2").textContent = gen();
}

document.querySelector("#gen").addEventListener("click", ()=>{
    let copyText = document.querySelector("#gen1");
    copyText.select();
    navigator.clipboard.writeText(copyText.textContent);
});