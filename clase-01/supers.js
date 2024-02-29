//Siempre intentamos definir todo con const

const super1 = { nombre: "Batman" };
const super2 = { nombre: "Mujer Maravilla" };
const super3 = { nombre: "Ironman" };
const super4 = { nombre: "Hulk" };
const super5 = { nombre: "Loki" };

function printName(obj) {
  return `el nombre del superheroe es ${obj.nombre}`;
}

console.log(printName(super1));
console.log(printName(super2));
console.log(super5.nombre);

super5.edad = 33;
super5.ciudad = "Asgard";

function printAll(arrayOfSupers) {
  for (let superheroe of arrayOfSupers) {
    //each es cada objeto del array de superheroes
    const template = printName(superheroe);
    console.log(template);
  }
}

const array1 = [super1, super2];
printAll(array1);


