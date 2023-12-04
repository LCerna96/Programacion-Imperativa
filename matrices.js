// Matrices

let a = [1, 5, 3];

// FILAS Y COLUMNAS

let mat = [
  [1, 2, 3], // filas
  [4, 5, 2], // filas
  //columnas
];

console.log(mat[1][1]);
console.log(mat[1][0]);

// Matrices cuadradas ("x" filas y "x" columnas)

let matriz = [
  [1, 5, 4],
  [6, 8, 2],
  [3, 7, 1],
];

// RECORRER UNA MATRIZ
// Recorrer fila

const recorrerFila = (mat, numFila) => {
  for (let i = 0; i < mat[numFila].length; i++) {
    mat[numFila][i] = 0;
  }
};

recorrerFila(matriz, 0);
console.table(matriz);

const acumFila = (mat, numFila) => {
  let acc = 0;
  for (let i = 0; i < mat[numFila].length; i++) {
    acc += mat[numFila][i];
  }

  return acc;
};

let res = acumFila(matriz, 1);
console.log(res);

console.log("");
console.log("----------");
console.log("");

// Recorrer columna

let matriz2 = [
  [1, 5, 4],
  [6, 8, 2],
  [6, 8],
  [6, 8],
  [6, 8, 2],
  [3, 7],
];

const recorrerCol = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    console.log(mat[i][2]);
  }
};

recorrerCol(matriz2);

const acumCol = (mat, numCol) => {
  let acc = 0;
  for (let i = 0; i < mat.length; i++) {
    if (mat[i][numCol] != undefined) {
      acc += mat[i][numCol];
    }
  }

  return acc;
};

let res2 = acumCol(matriz2, 1);
console.log(res2);

console.log("");
console.log("----------");
console.log("");

// Recorrer diagonal principal

let matrix = [
  [1, 5, 4],
  [2, 7, 1],
  [1, 8, 3],
];

const recorrerPrincipal = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    console.table(mat[i][i]);
  }
};

recorrerPrincipal(matrix);

console.log("");
console.log("----------");
console.log("");

// Recorrer diagonal principal

let matrix2 = [
  [1, 5, 4],
  [2, 7, 1],
  [1, 8, 3],
];

const recorrerSec = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    console.log(mat[i][mat.length - 1 - i]);
  }
};

recorrerSec(matrix2);

console.log("");
console.log("----------");
console.log("");

// Recorrer matriz completa

let matrix3 = [
  [1, 5, 4],
  [2, 7, 1],
  [1, 8, 3],
];

const recorrerCompleta = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    // maneja filas
    console.log("estoy en la fila" + i);
    for (let j = 0; j < mat[0].length; j++) {
      // maneja columnas
      console.log("estoy en la columna" + j);
      console.log(mat[i][j]);
    }
  }
};

recorrerCompleta(matrix3);

console.log("");
console.log("----------");
console.log("EJEMPLO 1");

let febrero = [
  // EMPEZAREMOS A CONTARLOS DIAS DESDE EL LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // SEMANA 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // SEMANA 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // SEMANA 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // SEMANA 4
];

// CALCULAR GASTO TOTAL DE LA TERCERA SEMANA
const totalSemanal = (gastos, numSemana) => {
  let posicion = numSemana - 1;
  let acc = 0;

  for (let i = 0; i < gastos[posicion].length; i++) {
    acc += gastos[posicion][i];
  }

  return acc;
};

let totalSemanaTres = totalSemanal(febrero, 3);
console.log(totalSemanaTres);

console.log("");
console.log("----------");
console.log("EJEMPLO 2");

// CALCULAR LOS GASTOS DE LOS DIAS SABADOS

const totalDia = (gastos, numDia) => {
  let posicion = numDia - 1;
  let acc = 0;

  for (let i = 0; i < gastos.length; i++) {
    acc += gastos[i][posicion];
  }

  return acc;
};

let totalSabados = totalDia(febrero, 6);
console.log(totalSabados);

console.log("");
console.log("----------");
console.log("EJEMPLO 3");

// CALCULAR LOS GASTOS TOTALES

const totalMensual = (gastos) => {
  let acc = 0;

  for (let i = 0; i < gastos.length; i++) {
    for (let j = 0; j < gastos[i].length; j++) {
      acc += gastos[i][j];
    }
  }

  return acc;
};

let totalFebrero = totalMensual(febrero);
console.log(totalFebrero);
