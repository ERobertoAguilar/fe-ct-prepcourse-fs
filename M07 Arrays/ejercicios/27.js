function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  // Utilizar el método join para concatenar las palabras con un espacio entre cada una
  return palabras.join(" ");
}
let palabra = ["hello", "world"];
console.log(dePalabrasAFrase(palabra));
module.exports = dePalabrasAFrase;
