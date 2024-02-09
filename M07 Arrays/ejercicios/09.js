function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  // Utilizar el método filter para obtener solo los elementos mayores a 10
  let elementosMayoresA10 = array.filter(function (elemento) {
    // Verificar si el elemento es mayor a 10
    return typeof elemento === "number" && elemento > 10;
  });

  // Retornar la cantidad de elementos mayores a 10
  return elementosMayoresA10.length;
}

module.exports = contarElementosMayoresA10;
