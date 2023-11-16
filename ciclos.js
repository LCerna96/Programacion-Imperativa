// ESTRUCTURAS DE REPETICION
// ciclos -- loops -- bucles
// for -- while -- do while

const probandoFor = () => {
  // inicialización; condición; modificador

  for (let i = 1; i <= 5; i++) {
    console.log(i);
    console.log("hola");
  }
};

probandoFor();

// sumatoria

const sumatoria = (NumInicial, numFinal) => {
  let acumulador = 0;

  for (let i = NumInicial; i <= numFinal; i++) {
    if (i % 2 == 0) {
      acumulador += i;
    }
  }

  return acumulador;
};

let res = sumatoria(1, 10);
console.log(res);
console.log("------------------------");

// tabla de multiplicar for

const tablaDeMultiplicar = (numero) => {
  for (let i = 1; i <= 10; i++) {
    producto = numero * i;

    console.log(`${numero} * ${i} = ${producto}`);
    // console.log(numero + " x " + i + " = " + producto);
  }
};

tablaDeMultiplicar(3);
console.log("------------------------");

// tabla de multiplicar while

const tablaConWhile = (numero) => {
  let i = 1;
  while (i <= 10) {
    producto = numero * i;
    console.log(`${numero} * ${i} = ${producto}`);
    // console.log(numero + " x " + i + " = " + producto);
    i++;
  }
};

tablaConWhile(4);
console.log("------------------------");

// tabla de multiplicar dowhile

const tablaDoWhile = (numero) => {
  let i = 1;
  do {
    producto = numero * i;
    console.log(`${numero} * ${i} = ${producto}`);
    i++;
  } while (i <= 10);
};

tablaDoWhile(5);
