function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

//    console.log(str1.split().sort() == str2.split().sort())

//   c(str1.split(" ").join())

// if(str1.length == str2.length  ){
//       return(true)
// }else if (str1.length != str2.length){
//       return(false)
// }
var str1OrdenadoAlfabeticamente = str1.toLocaleLowerCase().split("").sort().join()

console.log(str1OrdenadoAlfabeticamente)
var str2OrdenadoAlfabeticamente = str2.toLocaleLowerCase().split("").sort().join()

console.log(str2OrdenadoAlfabeticamente)

console.log(str1OrdenadoAlfabeticamente == str2OrdenadoAlfabeticamente)
if (str1OrdenadoAlfabeticamente !== str2OrdenadoAlfabeticamente ) {
 return false
}else {
 return true;
}




}

 esAnagrama("hoLa", "hOla")

module.exports = esAnagrama;
