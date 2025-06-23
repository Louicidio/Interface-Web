function operacoes() {
    let n1 = prompt("Digite o primeiro número: ");
    let n2 = prompt("Digite o segundo número: ");

    if (isNaN(n1) || isNaN(n2)) {
        console.log("Valores invalidos");
    }
    console.log("Soma: " + (parseFloat(n1) + parseFloat(n2)));
    console.log("Subtração: " + (parseFloat(n1) - parseFloat(n2)));
    console.log("Multiplicação: " + parseFloat(n1) * parseFloat(n2));
    console.log("Divisão: " + parseFloat(n1) / parseFloat(n2));
    console.log("Restante: " + (parseFloat(n1) % parseFloat(n2)));
}

function idade() {
    let idade = prompt("Digite a sua idade: ");
    if (idade < 18) {
        console.log("Menor de idade.");
    } else if (idade >= 18) console.log("Maior de idade.");
}

function contador(){
    let n = prompt("Digite um número: ");
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
function somaImpar(){
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let soma = 0;
    arr.forEach(function (el) { //for 
        if (el % 2 !== 0) {
            soma += el;
        }
    });
    console.log(soma);
}

function imc(){
    let peso = prompt("Digite o seu peso: ");
    let altura = prompt("Digite a sua altura: ");
    
    if (isNaN(peso) || isNaN(altura)) {
        console.log("Valores não validos");
        return;
    }
    
    let imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
    console.log("Seu IMC é: " + imc);
    
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidade");
    }

}
function parImpar(){
    let number = prompt("Digite um número: ");
    let resultado = number % 2 === 0 ? "Numero par" : "Numero impar";
    console.log("O numero: " + number + " é " + resultado);
}

function contadorRegressivo(){
    let n = prompt("Digite um número: ");
    for (let i = n; i >= n; i--) {
        console.log(i);
    }
}

function media(){
    let notas = [];
    let soma = 0;

    for (let i = 0; i < 4; i++) {
        let nota = prompt("Digite a nota: ");
        notas.push(parseFloat(nota));
    }
    notas.forEach(function (nota) {
        soma += nota;
    });
    let media = soma / 4;
    media >= 7 ? console.log("Aprovado") : console.log("Reprovado");
    console.log("Média: " + media);
}

function maiorValor(){
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
}

let maior = Math.max(...arr);
    console.log("Maior numero: " + maior);
}


function inverterString(){
    let str = prompt("Digite uma palavra ou frase: ")
    let inverterString = str.split("").reverse().join("");
    console.log(inverterString);
}

operacoes();
idade();    
contador();
somaImpar();
imc();
parImpar();
contadorRegressivo();
media();
maiorValor();
inverterString();

