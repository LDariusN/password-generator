let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

let button = document.getElementById("generate-btn")
let firstPass = document.getElementById("first-password-generated")
let secondPass = document.getElementById("second-password-generated")
let lenghtPass = 15
let pass1 = ""
let pass2 = ""
function start() {
    pass1 =""
    pass2 =""
    for (let i=0; i < lenghtPass; i++) {
        let passwordFirst = Math.floor(Math.random() * characters.length)
        let passwordSecond = Math.floor(Math.random() * characters.length)
        pass1 += characters[passwordFirst]
        pass2 += characters[passwordSecond]
    }
    firstPass.textContent=pass1
    secondPass.textContent=pass2
}
