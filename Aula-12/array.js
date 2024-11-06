let lang = "Python" ;
console.log(lang);
console.log(lang[5]); // n
console.log(lang[0]); // p

let numero = 5;
let numeros = [4 , 8, 7, 1, 0, 6, 8, 0];
console.log("Vetor",numeros);
console.log("Segundo Elemento",numeros[2]);

numeros[2] = 14;
console.log("Antes",numeros);

numeros.push(3);
console.log("Depois",numeros);

console.log("Posição Indefinida",numero[12]);
console.log("Comprimento",numeros.length); // 9

let last = numeros.length - 1;
console.log("Ultimo", numeros[last]);

const nomes = ["Leonardo", "Wesley", "Paulo", "Laís", "Igor", "Larissa"];
const tamanho = nomes.length;
for (let i = 0; i < tamanho; i++) {
    console.log("Bem-vindo(a)", nomes[i])
}

console.log("***************");
for(let nome of nomes) {  // for each
    console.log("Bem-vindo(a)", nome) ;
}