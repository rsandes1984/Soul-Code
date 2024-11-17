import{ multiplicar as mult, dividir as div, somar } from "./calculadora.js"; // calculo variado
import calculadora from "./calculadora.js"; // calculo individual


// bibliotecsd / modulos
//Math.tan, sin, cos



console.log(Math.sqrt(121)); //square root
console.log(Math.ceil(4.4)); // arrendonda para cima
console.log(Math.floor(4.4)); // arrendodadr pra baixo
console.log(Math.ceil(100/3)); 
console.log(Math.round(4.6)); // mais proximo
console.log(Math.cos(1,5708)); // cos 90
console.log(Math.pow(6, 3)); // 216
console.log(Math.cbrt(64));  // cubic root
console.log(Math.abs(9)); //vakor absoluto
console.log(Math.random()); //aleatorio/randomico
const rand = Math.random();
console.log("Aleatorio:", Math.floor(rand * 100) + 1); //aleatorio/randomico
console.log(Math.max(1, 6, 9, 3)); //9 
console.log(Math.min(1, 6, 9, 3)); // 1

console.log(mult(4, 5));
console.log(div(21, 3));
console.log(somar(7, 4));
console.log(calculadora(23 , 23));

//Funções Recursivas
// Fatorial !5= 5*4*3*2*1;
function fatorial(numero) {
    if(numero == 1){
        return 1;
    } else{
        return numero * fatorial(numero-1);
    }
}

console.log(fatorial(5)); //120 