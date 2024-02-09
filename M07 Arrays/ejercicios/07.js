function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  // Utilizar el método map para convertir a mayúsculas cada string del array
  return array.map(function (elemento) {
    // Verificar si el elemento es un string antes de convertir a mayúsculas
    if (typeof elemento === "string") {
      return elemento.toUpperCase();
    } else {
      return elemento; // Mantener otros tipos de elementos sin cambios
    }
  });
}

// Ejemplo de uso:
let miArray = ["hola", 123, "adiós", true];
let arrayEnMayusculas = convertirStringAMayusculas(miArray);

console.log("Array original:", miArray);
console.log("En mayúsculas:", arrayEnMayusculas);

module.exports = convertirStringAMayusculas;
