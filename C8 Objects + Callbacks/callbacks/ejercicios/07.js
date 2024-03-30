function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   const arrayConA = arrayOfStrings.filter((elemento) => elemento.startsWith('a'));
   console.log(arrayConA)
   return(arrayConA)
}

module.exports = filter;
