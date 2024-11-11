const pessoa = {
    nome: "Rodrigo Sandes",
    idade: 22,
    cumprimentar: function() {
        console.log( `Olá meu nome é ${this.nome}.`);
    }
}

console.log(pessoa);
pessoa.cumprimentar();

// Funções Cosntrutores -> função que ira um novo objeto (imstância)
//POOProgramção Orientada a Objetos) -> Classe(Representação do Objeto)

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
const pessoa2=  new Pessoa("Daniel", 27);
console.log(pessoa2);

// Operador Spread (Espalhar) 
const produto1 = {
    descricao: "Manga Vermelha",
    preco: 2.5,
    categoria:"Frutas e Hortalicas"
}
const produto2 = {...produto1} // copiando tudo do produto para um novo objeto
produto1.descricao - "Manga Azul";
console.log(produto1.descricao);
console.log(produto2.descricao);

// Desestruturação (Destruction)

const produto3 = {
    descricao: "SSD 512GB",
    preco: 400
}
//const descricao = produto3.descricao; // antes
const { descricao, preco } = produto3; // depois // desestruturação de objeto
console.log(descricao); // SSD 512GB
console.log(preco)

const pessoa3 = {
    nome: "Estefane",
    Endereco:{
        rua: "Rua Julio Maria",
        UF: "RJ",
        Bairro: "Pereque",
    }

}
const { nome, Endereco:{ rua,UF, Bairro } } = pessoa3;
console.log (nome);
console.log(rua);
console.log(UF);
console.log(Bairro);

const venda = {
    cliente: "Bismark Araujo",
    data:"11/11/2024",
    nota: {
        codigo: "0498503485",
        tipo:"XML"
    }
}
const{ cliente, nota:{codigo} } = venda;
console.log("Cliente:", cliente);
console.log("Codigo da nota:", codigo);

// Desestruturação de vetor

const nomes = ["Rodrigo", "Thiagp", "Leonardo"];
const [primeiro, segundo, terceiro, quarto, quinto] = nomes;
console.log(primeiro);
console.log(quinto);

const tarefas = [
    { desc: "Estudar JavaScript" },
    { desc: "Academia" },
    { desc: "Sair com cachorro" },
];

const [p, s, { desc }] = tarefas;
//console.log(tarefas[0].desv);
console.log(desc);

const nomes2 = [...nomes]; // copiar uma linha
console.log(nomes2);