import calculadora, {subtrair} from "./operacoes.js";

console.log(subtrair(48, 3));
console.log(calculadora(36, 5 ));



    
  const vetor1 = [1, 2, 3];
  const vetor2 = [4, 5, 6, 7];
  const vetor3 = [...vetor1, ...vetor2];
  console.log(vetor3);
  
  
  const usuario = {
    nome: "Patrick",
    idade:"30",
    email:"patrick@gmail.com"

  };

  const usuariocompleto ={
    ...usuario,
    telefone: "02499999956"
  };

  console.log(usuariocompleto);

  const livro = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    genero: "Ficção"
  };

  const { titulo, autor } = livro;

  console.log("Título:", titulo);
console.log("Autor:", autor);

