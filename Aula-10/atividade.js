x = 7 , y= 8;

console.log("Soma"; x + y); // 15
console.log("Subtração"; x - y); // -1
console.log("Multiplicação"; x * y); // 56
console.log("Divisão"; x / y); // 0.875
console.log("Exponenciação"; x ** y); // 5764801cls

x = 10; 

x += 5;
x -= 3;
x *= 2;
x /= 4;
console.log("x =", x);

const text1 = "Java";
const text2 = "JavaScript";
const iguais = text1 == text2;
const diferentes = text1 !== text2;
console.log("palavra 1;", text1);
console.log("palavra 2:", text2);
console.log("São iguais?", iguais);
console.log("São diferentes", diferentes);


let a = 10;
let b = 11;
console.log( "a =" , a);
console.log("b =", b);
console.log("a é maior que b?", a > b);
console.log("a é menor ou igual a b?", a <= b);
console.log("a é par?", ((a % 2) == 0));
console.log("a é ímpar?", !(a % 2 ==0));

let p = true, q = false, s = true;
console.log("Conjunção:", (p && q && s));
console.log("Disjunção:", (p || q || s));
console.log("Negação da Disjunção:" !(p || q || s));