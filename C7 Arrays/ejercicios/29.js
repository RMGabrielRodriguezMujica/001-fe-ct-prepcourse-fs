function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  function encontrarNumeroFaltante(numeros) {
    if (numeros.length === 0) {
      return null; // Devuelve null si el array es vacío
    }
  
    // Calcula la suma esperada de la secuencia completa
    const sumaEsperada = (numeros.length + 1) * (numeros[0] + numeros[numeros.length - 1]) / 2;
  
    // Calcula la suma real de los números en el array
    const sumaReal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  
    // Encuentra el número faltante
    const numeroFaltante = sumaEsperada - sumaReal;
  
    return numeroFaltante;
  }
  


}

module.exports = encontrarNumeroFaltante;