function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento); // Utilizar el método push para agregar el elemento al final del array
  return array;
}
let array = [10, 10, 16, 12];
let elemento = [10];
console.log(agregarItemAlFinalDelArray(array, elemento));
module.exports = agregarItemAlFinalDelArray;
