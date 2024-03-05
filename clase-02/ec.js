/* Viendo el uso del Nullish */

let booleano = false
//booleano = booleano || "Reasigne valor por esta cadena de texto"
booleano = booleano ?? "Reasigne valor por esta cadena de texto"
console.log(booleano);

let cero = 0
// cero = cero || "Reasigno si es null o undifined"
cero = cero ?? "Reasigno si es null o undifined"
console.log(cero);

let nula = null
nula = nula ?? "si es nula"
console.log(nula);

