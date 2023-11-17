// EJERCICIO 1
console.log("");
console.log("------------");
console.log("EJERCICIO 1");

const restarPares = (numero1, numero2) => {
  if (numero1 % 2 == 0 && numero2 % 2 == 0) {
    return numero1 - numero2;
  } else {
    return "Lo siento, uno o mas parámetros no son pares";
  }
};

let res1 = restarPares(5, 6);
console.log(res1);
let res2 = restarPares(6, 4);
console.log(res2);

// EJERCICIO 2
console.log("");
console.log("------------");
console.log("EJERCICIO 2");

const accesoRecital = (edad, entrada) => {
  if (entrada) {
    if (edad >= 18) {
      return true;
    } else {
      return "Sólo puedes acceder con un adulto acompañante";
    }
  } else {
    return false;
  }
};

let persona1 = accesoRecital(20, true);
console.log(persona1);
let persona2 = accesoRecital(17, true);
console.log(persona2);
let persona3 = accesoRecital(20, false);
console.log(persona3);
let persona4 = accesoRecital(17, false);
console.log(persona4);

// EJERCICIO 3
console.log("");
console.log("------------");
console.log("EJERCICIO 3");

let productos = [
  {
    producto: "remera",
    tipo: "indumentaria",
    precio: 2100,
  },
  {
    producto: "notebook",
    tipo: "tecnologia",
    precio: 200000,
  },
  {
    producto: "celular",
    tipo: "tecnologia",
    precio: 27000,
  },
  {
    producto: "protector solar",
    tipo: "cosmetica",
    precio: 2500,
  },
  {
    producto: "pantalon",
    tipo: "indumentaria",
    precio: 7500,
  },
  {
    producto: "tablet",
    tipo: "tecnologia",
    precio: 60000,
  },
];

const filtro = (arreglo) => {
  let nuevoArreglo = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].tipo === "tecnologia" && arreglo[i].precio >= 50000) {
      nuevoArreglo.push(arreglo[i].producto);
    }
  }

  return nuevoArreglo;
};

let productosFiltrados = filtro(productos);
console.log(productosFiltrados);
