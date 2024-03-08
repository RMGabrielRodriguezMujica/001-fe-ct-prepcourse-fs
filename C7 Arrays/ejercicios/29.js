function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  // if (numeros.length == 0) {
  //   return null
  // }

  // var resultado = 0
  // for (let i = 0; i <= numeros.length; i++) {
  //   resultado = i + resultado
  // }

  // const sumaEsperada = (numeros.length + 1) * (numeros[0] + numeros[numeros.length - 1]) / 2;

  // let sumaReal = numeros.reduce((a, b) => a + b);
  
  // if (resultado == sumaReal) {
  //   return null;
  // }

  // return(Math.floor(sumaEsperada) - sumaReal)





    for (let i = 0; i < numeros.length - 1; i++) {
      if (numeros[i] + 1 !== numeros [i + 1]) {
        return numeros[i] + 1
      }
    
  }
  return null
}

module.exports = encontrarNumeroFaltante;