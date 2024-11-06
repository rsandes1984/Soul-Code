let contador = 10;
while (contador > 0) {
    console.log(contador);
    contador--;
}

let palavra = "Rodrigo Sandes";
let posicao = 0;
while(palavra[posicao] != "a") {
    console.log(palavra[posicao]);
    posicao++;
}

for(let contador = 0; contador < 10; contador++){
    console.log(contador);
}



let x = 12;
let y = 700;
for (let i = x; i < y; i++) {
    if (i % 7 == 0) {
        console.log(i);
        break;
    }
}

let a = 1;
console.log(a);
{

    let a = 2;
    console.log(a);
    {
        let a = 3;
        console.log(a);
        {
            let a = 4;
            console.log(a);
           
        }
    }
}

console.log("***************");

for (let i = 15, c = 0; i < 50; i++) {
    if (i % 6 == 0) {
        console.log(i);
        c++;
    }
    if (c == 3) {
        break
    }
    
}

console.log("################");

for(let i = 0; i < 10; i ++) {
    if(i % 3 == 0) {
        continue;
    }
    console.log(i);
}