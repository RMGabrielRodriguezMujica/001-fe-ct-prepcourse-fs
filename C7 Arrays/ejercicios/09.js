function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:


   var aleatorio = Math.random(1, array.length)

 console.log(aleatorio)
   return(array[aleatorio])
}


module.exports = obtenerElementoAleatorio;
