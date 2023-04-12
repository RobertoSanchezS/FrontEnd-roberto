class Persona  { 
    #nombre; // atributo privado
    #apellido;
    #edad;
    //constructor es el que construye la instancia del objeto
    constructor(nombre, apellido, edad) {
      //Atributos
      this.#nombre = nombre;
      this.#apellido = apellido;
      this.#edad = edad;
    }    
    //Metodos
}
class Mascota {
    #nombre; // atributo privado
    #tipo;
    constructor (nombre, tipo) {
        this.#nombre= nombre;
        this.#tipo = tipo;        
    }
}

// Instancia= Creacion de un objeto a partirde una classe (molde)
const jhonDoe = new Persona("jhon"); // Objeto
const mariaSmithers = new Persona("Maria"); // Objeto
const puchi = new Mascota("Puchi", "Perro"); 


console.log(jhonDoe);
console.log(mariaSmithers);
console.log(puchi);