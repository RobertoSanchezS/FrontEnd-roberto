class Persona  { 
    #nombre; // atributo privado
    //constructor es el que construye la instancia del objeto
    constructor(nombre, apellido, edad) {
      //Atributos
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
    }    
    //Metodos
}
class Mascota {
    #nombre; // atributo privado
    constructor (nombre, tipo) {
        this.nombre= nombre;
        this.tipo = tipo;        
    }
}

// Instancia= Creacionde un objeto a partirde una classe (molde)
const jhonDoe = new Persona("jhon"); // Objeto
const mariaSmithers = new Persona("Maria"); // Objeto
const puchi = new Mascota("Puchi", "Perro"); 


console.log(jhonDoe.nombre);
console.log(mariaSmithers.nombre);
console.log(puchi.nombre);
// 
// 