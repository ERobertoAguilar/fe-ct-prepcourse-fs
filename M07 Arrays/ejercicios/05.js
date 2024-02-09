function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  // Utilizar el método find para encontrar el primer string con más de 5 caracteres
  // return array.find(function (array) {
  //  return typeof array === "string" && array.length >= 5;
  // });

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      return array[i];
    }
  }
}
let array = ["hellow", "world", "this", "is", "a", "test"];
console.log(obtenerPrimerStringLargo(array));
module.exports = obtenerPrimerStringLargo;
