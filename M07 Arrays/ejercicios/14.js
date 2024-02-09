function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  // Verificar si no se pasaron argumentos
  if (arguments.length === 0) {
    return 0;
  }
  // Verificar si se pasó solo un argumento
  if (arguments.length === 1) {
    return arguments[0];
  }
  // Utilizar la palabra clave `arguments` para multiplicar todos los argumentos
  let producto = 1;
  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }
  return producto;
}
console.log(multiplicarArgumentos(5, 5));
console.log(multiplicarArgumentos());
console.log(multiplicarArgumentos(3, 3, 3, 3));
console.log(multiplicarArgumentos(1));
console.log(multiplicarArgumentos(10, 0, 10));

module.exports = multiplicarArgumentos;
