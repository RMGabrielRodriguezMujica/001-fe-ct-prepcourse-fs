function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:


// var aleatorio = Math.floor(Math.random()*array.legth)

// console.log(aleatorio)


// al

// var resultado = array[aleatorio]
  return(array[Math.floor(Math.random()*array.length)])
}


module.exports = obtenerElementoAleatorio;
