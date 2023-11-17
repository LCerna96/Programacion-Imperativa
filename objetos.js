// OBJETOS Literales --> diccionario

// let nombreUsuario = "pepe";
// let edadUsuario = 12;
// let direccion = "italia192";
// let saludar = () => {
//   console.log("hola soy pepe");
// };

// Propiedades (cosas que describen al objetos)
// Métodos (cosas que puede hacer el objeto)

// pares --> clave : valor

const saludarFn = function () {
  return "hola soy " + this.nombre;
};

let usuario = {
  nombre: "pepe",
  edad: 12,
  direccion: "italia192",
  saludar: saludarFn,
};

let usuario2 = {
  nombre: "carmen",
  edad: 12,
  direccion: "italia192",
  saludar: saludarFn,
};

let usuario3 = {
  nombre: "maria",
  edad: 12,
  direccion: "italia192",
  saludar: saludarFn,
};

//dot notation
console.log(usuario.edad);
console.log(usuario.direccion);
console.log(usuario.saludar());
console.log(usuario2.saludar());
console.log(usuario3.saludar());

let persona = {
  nombre: "carmen",
  edad: 12,
  direccion: "italia192",
  saludar: saludarFn,
};

// Modificar
console.log("---------");
console.log("MODIFICAR");

persona.nombre = "fulanito";
persona.edad += 1;

console.log(persona);

// Agregar
console.log("---------");
console.log("AGREGAR");

persona.esMayor = true;

console.log(persona);

// Eliminar
console.log("---------");
console.log("ELIMINAR");

delete persona.direccion;

console.log(persona);

// ARREGLOS DE OBJETOS
// Tablas y registros

console.log("---------");
console.log("ARREGLOS DE OBJETOS");

let calcularPromedio = function () {
  let acc = 0;
  for (let i = 0; i < this.notas.length; i++) {
    acc += this.notas[i];
  }
  return acc / this.notas.length;
};

let estudiantes = [
  {
    nombre: "pepe",
    edad: 21,
    notas: [10, 8, 10],
    promediar: calcularPromedio,
  },
  {
    nombre: "maria",
    edad: 18,
    notas: [9, 8, 7],
    promediar: calcularPromedio,
  },
  {
    nombre: "pepe",
    edad: 19,
    notas: [10, 9, 4],
    promediar: calcularPromedio,
  },
];

const funcionParaLaProfesora = (array) => {
  for (i = 0; i < array.length; i++) {
    console.log(
      `El alumno ${array[i].nombre} tiene un promedio de ${array[
        i
      ].promediar()}`
    );
  }
};

funcionParaLaProfesora(estudiantes);
