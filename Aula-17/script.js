// Programação Assincrona // Funções Executando em Paralelo

console.log("Antes");

setTimeout(() => {
    console.log("Atrasado");
}, 2000);

console.log("Depois");

let a = 2;
a++;
setTimeout(() => ++a, 1000);

console.log(a); //3


// asyn e await
//Promise - Promessa (instruções executadas de forma assincrona)
//axios.get("https://api.github.com/users/rsandes1984").then(resposta => {
//    console.log(resposta);
//});

// asyn e await  melhor modo de ler o codigo

async function buscarDadosGGithub(){
   const resposta = await axios.get("https://api.github.com/users/rsandes1984");
   console.log(resposta);
}

buscarDadosGGithub();

console.log("Depois da requicisão."); 