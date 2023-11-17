// Array -- arreglo -- colección -- lista

// elementos
// posiciones -> 0
let numerosDeLaSuerte = [54, 21, 12, 124, 15];

console.log(numerosDeLaSuerte[0]);

//push
console.log("-----------");
console.log("PUSH");
console.log(numerosDeLaSuerte);
numerosDeLaSuerte.push(81, 45, 16);
console.log(numerosDeLaSuerte);

//pop
console.log("-----------");
console.log("POP");

console.log(numerosDeLaSuerte);
let cortado = numerosDeLaSuerte.pop();
console.log(cortado);
console.log(numerosDeLaSuerte);

// caracteres
console.log("-----------");
console.log("CARACTERES");

let palabra = "casa";
console.log(palabra[1]);

palabra = palabra.toUpperCase();

console.log(palabra);
console.log(palabra.length);
console.log(numerosDeLaSuerte.length);

let email = "pepe@gmail.com";
let emailValido = email.includes("@");
console.log(emailValido);

// Invertido
console.log("-----------");
console.log("INVERTIDO");

let arr = [15, 21, 1, 25];
let arrInvertido = [];

for (let i = 0; i < 4; i++) {
  arrInvertido.push(arr.pop());
}

console.log(arrInvertido);

// Index
console.log("-----------");
console.log("INDEX");

let mascotas = ["jack", "lola", "rojo", "firulais"];
let posicionRojo = mascotas.indexOf("rojo");
console.log(posicionRojo);

// iterar o recorrer un array
console.log("-----------");
console.log("RECORRER 1");

const recorrerArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

let arr1 = [15, 21, 1, 25];
recorrerArray(arr1);

console.log("-----------");
console.log("RECORRER 2");
const cambiarArray = (array) => {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].toUpperCase());
  }

  return newArray;
};

let mascotasGrandes = cambiarArray(mascotas);
console.log(mascotasGrandes);

console.log("-----------");
console.log("RECORRER 3");

let noviembre = [54, 21, 12, 124, 15, 766, 125, 11, 9898, 13, 2, 540];

const obtenerTotalVendido = (array) => {
  let acc = 0;
  for (let i = 0; i < array.length; i++) {
    acc += array[i];
  }

  return acc;
};

let totalVendidos = obtenerTotalVendido(noviembre);
console.log(totalVendidos);

console.log("-----------");
console.log("RECORRER 4");

let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length - 1]);

console.log("-----------");
console.log("RECORRER 5");
/* TODO :
    A partir de un array de correos, recorrerlo para corroborar si son válidos. 
    Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y 
    agregar aquellos que lo tengan al array de correos admitidos.
    En caso de no encontrar el carácter, se deberá agregar al array de correos descartados.
    Desarrollar una función que realice la verificación de cada elemento del array 
    de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos. Caso contrario, 
    agregar al arrayCorreoDescartados (vaciar el array de correos pendientes).
    Mostrar por pantalla la cantidad y los elementos de cada array.
*/

// PARA SER VALIDO DEBE CONTENER UN @
let arrayCorreosPendientes = [
  "iroman@digitalhouse.com",
  "loki%digitalhouse.com",
  "loki@digitalhouse.com",
  "thanosdigitalhouse.com",
  "thanos@digitalhouse.com",
];

// array de correos admitidos
let arrayCorreosAdmitidos = [];

// array de correos descartados

let arrayCorreosDescartados = [];

const verificarCorreos = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes("@")) {
      arrayCorreosAdmitidos.push(array[i]);
    } else {
      arrayCorreosDescartados.push(array[i]);
    }
  }

  arrayCorreosPendientes = [];
};

verificarCorreos(arrayCorreosPendientes);

console.log(arrayCorreosAdmitidos);
console.log(arrayCorreosDescartados);
console.log(arrayCorreosPendientes);
