const characters = [["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"],["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"],["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]];
const lenVal = document.querySelector("#length-value");
const input = document.querySelector("#length");
lenVal.textContent = input.value;

input.addEventListener("input", (event) =>{
    lenVal.textContent = event.target.value;
})

function length(){
    return lenVal.textContent;
}
function characterSelector(){
    if(document.querySelector("#symbols").checked && document.querySelector("#numbers").checked){
        console.log(0);
        return characters[0];
    } else if(document.querySelector("#symbols").checked){
        console.log(1);
        return characters[1];
    } else if (document.querySelector("#numbers").checked){
        console.log(2);
        return characters[2];
    } else {
        return characters[3];
    }
}

function gen(val = length(),characterSet = characterSelector()){
    let result = "";
    for(let i = 0 ;i < val; i++ ){
        result += characterSet[Math.floor(Math.random() * characterSet.length)];
    }
    return result;
}

function genTime(){
    document.querySelector("#gen1").textContent = gen();
    document.querySelector("#gen2").textContent = gen();
}

function copyToClipboard(el) {
    let copyText = document.getElementById(el).textContent;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        document.querySelector(".popup").style.display = "flex";
        document.querySelector(".popup").style.visibility = "visible";
        setTimeout(() => {
            document.querySelector(".popup").style.display = "none";
            document.querySelector(".popup").style.visibility = "hidden";
        }, 2000);
        document.querySelector(".popup").textContent = `${copyText} copied to clipboard!`;

    });
}