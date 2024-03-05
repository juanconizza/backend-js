const n1 = 100
const n2 = 10.05
const n3 = -50

const c1 = "   hola"
const c2 = "chau"
const c3 = "    holaaaaaa"

const obj = {
    nombre: "jp",
    edad: 30,
    ciudad: "tucuman",
    color: "azul",
    mascota: "perro"
}

const exponencial1 = n2 ** n1
console.log(exponencial1);
const exponencial2 = n1 ** n2;
console.log(exponencial2);

const arrayOfDeCadenas1 = ["hola", "chau", "holaaaa"]
console.log(arrayOfDeCadenas1.includes(c2));
console.log(arrayOfDeCadenas1.includes(c3));

const arrayOfDeCadenas2 = [c1.trim(), c2.trim(),c3.trim()]
console.log(arrayOfDeCadenas2.includes("hola"));
console.log(arrayOfDeCadenas2.includes("chau"));

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const {nombre, edad, ...rest} = obj
console.log(nombre);
console.log(edad);
console.log(rest);

const cadenasYNumeros = {c1, c2, c3, n1, n2, n3}
console.log(cadenasYNumeros);



