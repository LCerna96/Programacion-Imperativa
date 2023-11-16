//Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad inválida. Por favor ingrese un número válido."

let edad = 20;

if (edad < 18) {
  console.log("No puede pasar al bar.");
} else if (edad < 21) {
  console.log("Puede pasar al bar, pero no puede tomar alcohol.");
} else {
  console.log("Puede pasar al bar y tomar alcohol.");
}
