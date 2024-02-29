// Repaso Clases
// Las clases se declaran con PascalCase
// Se declaran en singular
// En lo posible representativo del recurso y en ingles

class Persona {
  //propiedad de la clase
  static cantidadDePersonas = 0;

  constructor(nombre, edad, ciudad, vida) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.vida = vida;
    //this hace referencia a esta instancia.

    //El contador es una propiedad de la Clase, NO de la instancia.
    Persona.cantidadDePersonas++;
  }

  comer(cantidad) {
    this.vida < 150 ? (this.vida = this.vida + cantidad) : "No podes comer mas";
  }

  entrenar(cantidad) {
    this.vida = this.vida - cantidad;
    if (this.vida > 50 && cantidad < this.vida){
        this.vida = this.vida - cantidad;


    }else {
        console.log("No Podes Entrenar Mas");
    }
  }

  mudarse(ciudad) {
    this.ciudad = ciudad;
    this.vida = this.vida - 20;
  }
}

const persona1 = new Persona("igna", 33, "Rosario", 120);
persona1.comer(20);
persona1.entrenar(10);
const persona2 = new Persona("talia", 20, "Cordoba", 100);
persona2.comer(30);
persona2.entrenar(30);
persona2.mudarse("Mendoza");
const persona3 = new Persona("pedro", 20, "Santa Fe", 100);
const persona4 = new Persona("juan", 20, "Chubut", 100);
persona4.entrenar(60)


console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log(persona4);
console.log(Persona.cantidadDePersonas);
