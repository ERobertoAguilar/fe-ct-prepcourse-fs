function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}
let array = [10, 10, 16, 12];
let elemento = [10];
console.log(agregarItemAlComienzoDelArray(array, elemento));
module.exports = agregarItemAlComienzoDelArray;
