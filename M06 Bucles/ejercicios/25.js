function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  // Eliminar espacios y convertir a minúsculas para hacer la comparación sin considerar mayúsculas ni espacios
  const textoSinEspacios = string.toLowerCase().replace(/\s/g, "");
  // Invertir el texto
  const textoInvertido = textoSinEspacios.split("").reverse().join("");
  return textoSinEspacios === textoInvertido;
}
console.log(esPalindromo("ana"));
console.log(esPalindromo("reconocer"));
console.log(esPalindromo("La ruta nos aporto otro paso natural"));
console.log(esPalindromo("hola"));
console.log(esPalindromo("javascript"));
console.log(esPalindromo("No subas, abusón"));
module.exports = esPalindromo;
