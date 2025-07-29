const prompt = require("prompt-sync")();

let numero1 = Number(prompt("digite um numero:"));
let numero2 = Number(prompt("digite um numero:"));

console.log("soma",numero1 + numero2);
console.log("subtração",numero1 - numero2);
console.log("multiplicação",numero1 * numero2);
if(numero2 == 0){
    console.log("A divisão é impossivel");
}else{
    console.log("divisão",numero1 / numero2);
}
console.log("resto de divisão",numero1 % numero2);
