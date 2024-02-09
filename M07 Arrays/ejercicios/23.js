function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  if (array.length > 0) {
    return array[array.length - 1]; // Devolver el último elemento
  }
}
let array = [10, 97, 100, 80, 55, 72, 94];
console.log(devolverUltimoElemento(array));

module.exports = devolverUltimoElemento;
