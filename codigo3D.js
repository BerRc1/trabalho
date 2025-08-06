const prompt = require("prompt-sync")();

let nomes = [];
let idades = [];
let Maioridade = 0;
let Menoridade = 999;
let MaiorIdadeNome = "";
let MenorIdadeNome = "";

let qtd = Number(prompt("Quantas pessoas estão no grupo? "));

for (let i = 0; i < qtd; i++) {
    let nome = prompt("Qual seu nome? ");
    let idade = Number(prompt("Qual sua idade? ")); // convertendo para número

    nomes[i] = nome;
    idades[i] = idade;

    if (idade > Maioridade) {
        Maioridade = idade;
        MaiorIdadeNome = nome;
    }

    if (idade < Menoridade) {
        Menoridade = idade;
        MenorIdadeNome = nome;
    }
}

console.log(`\nPessoa mais idosa: ${MaiorIdadeNome}, ${Maioridade} anos.`);
console.log(`Pessoa mais jovem: ${MenorIdadeNome}, ${Menoridade} anos.`);



