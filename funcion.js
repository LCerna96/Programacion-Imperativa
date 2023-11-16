// FUNCIONES

let nombre = "juan";

console.log(nombre);

// 3 tipos

// Declaradas

function f1() {
  let edad = 5;
  console.log(edad);
}

f1();

//

function saludar(nombre) {
  let saludo = "Hola cómo estás" + nombre;
  return saludo;
}

let saludoFinal = saludar("martin");
console.log(saludoFinal);

let nombreUsuario = "pepito";

function cambiarNombre() {
  nombreUsuario = "maria";
}

console.log(nombreUsuario);

cambiarNombre();

console.log(nombreUsuario);

console.log("-----");

//

function sumar(numeroUno, numeroDos) {
  return numeroUno + numeroDos;
}

let res = sumar(10, 20);
console.log(res);

let res2 = sumar(5, 7);
console.log(res2);

let res3 = sumar(6, 1);
console.log(res3);

// Expresada común --> anónima

let restar = function (n1, n2) {
  return n1 - n2;
};

let resultado = restar(12, 54);

// Expresada de tipo flecha

let multiplicar = (numero) => {
  return numero * 2;
};
let dividir = (numero) => numero / 2;

// SCOPE --> alcance
// unicamente en su mismo scope o inferiores

let edad = 10;

console.log(edad);

let probandoScope = () => {
  console.log(edad);
};

probandoScope();
