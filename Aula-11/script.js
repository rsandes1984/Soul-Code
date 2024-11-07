let idade = 15;
let = autorizaoPais= false;

if (idade >= 18 || autorizaoPais) {
    console.log("Pode Viajar.");
}else{
    console.log("Não pode viajar.")
}
let clima = "amêno";
if(clima == "sol"){
    console.log("Hoje vou pescar!");
}else if (clima == "nublado"){
    console.log("Hoje vou fazer compras!!");
}else if (clima == "amêno"){
    console.log("Hoje vou caminhar!!");
}else{
    console.log("Hoje vou dormir!");
}

let num = -55;
console.log((num % 2 == 0) ? "Par" : "Ímpar");
console.log((num < 0) ? "Negativo" : "Positivo")


let dia =15;
switch(dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Este dia não existe");
}
let a = 170 , b = 1200, c = 202;

if (a > b) {
    if (a > c && b > c) {
        console.log(a, ">", b, ">", c);
    } else if(a > c) {
        console.log(a, ">", c, ">", b);
    }else{
        console.log(c, ">", a, ">", b);
    }
} else if(b > c) {
    if(a > c){
        console.log(b, ">", a, ">", c);
    }else{
        console.log(b, ">", c, ">", a);
    }
}else{
    console.log(c, ">", b, ">", a);
}


