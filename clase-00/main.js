

/* string */

const cadenaDeTexto = "con camelCase, no con PascalCase"

console.log(cadenaDeTexto);

/* number */
let numero = 1234.41568
console.log(numero);

/* boolean */ 
const verdadero = true // false
console.log(verdadero);


const datos = {cadenaDeTexto, numero, verdadero} // Esto es porque coinciden los valores sino se usa xxx : yyy
console.log(datos);

const arreglo = [1, "uno", datos, verdadero]
console.log(arreglo);

numero = 1234;
console.log(numero);

//Agregamos al objeto un dato

datos.fechaDeNacimiento = new Date ("1990/07/09") 
datos["fecha"] = 1990;

console.log(datos);



