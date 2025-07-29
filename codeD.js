const prompt = require("prompt-sync")();
 let numero1 = 120;
let desconto= numero1 * 0.15;
let valorFinal = numero1 - desconto + 10;
 console.log (numero1 * 0.15, " reais de desconto de 15 porcento");
 console.log (numero1 - desconto );
 console.log (numero1 - desconto + 10, "mais taxa de entrega de 10 reais");
 console.log ("o valor final é", valorFinal);