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

console.log("****************");

const frutas = ["Maçã", "Laranja", "Morango", "Limão", "Pera", "Cajarana"];
frutas.push("Ciriguela") // inclui o elemento na lista
frutas.pop(); // remove o ultimo elemento da lista
console.log(frutas);

console.log(frutas.includes("Caju")); // false (frutas inclusas na lista)
console.log(frutas.includes("Maçã")); // true
console.log(frutas.indexOf("Limão")); // 3 (posição dentro da lista)
console.log(frutas.indexOf("Goiaba")); // -1 (Não está na lista.)

frutas.splice(2, 1); // remove somente um item
console.log(frutas);