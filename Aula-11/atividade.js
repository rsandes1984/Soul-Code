let nota = 60;
if (nota >= 60 || resultado) {
    console.log("Aprovado.");
}else{
    console.log("Reprovado.")

}


let idade = "75";
if(idade >= 0 && idade < 12){
    console.log("Criança");
}else if(idade >=12 && idade <= 17){
    console.log("Adolescente");
}else if(idade >= 18 && idade <= 64){
    console.log("Adulto");
}else{
    console.log("Idoso");
}

let mes = 11;
switch(mes){
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outrubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
default:
    console.log("Este mes não existe");

}

let usarioPredefinido = "admin";
let senhaPredefinido = "12345";
let usuario = "Rodrigo";
let senha = "melnachupeta";
if(usarioPredefinido === usuario && senhaPredefinido === senha){
    console.log("login bem-sucedido");
}else{
    console.log("Usuario ou senha incorretos.");

    let score = 88;
    let mensagem = (score >= 100) ? "Você venceu!" : "Tente novamente!";
    console.log(mensagem);
}
