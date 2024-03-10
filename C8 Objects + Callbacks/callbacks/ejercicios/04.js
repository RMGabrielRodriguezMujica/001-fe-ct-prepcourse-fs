function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:

   var sumaArray = 0

   for (let i = 0; i < arrayOfNumbers.length; i++) {
      sumaArray += arrayOfNumbers[i]
      
   }

   cb(sumaArray)
}

module.exports = sumarArray;
