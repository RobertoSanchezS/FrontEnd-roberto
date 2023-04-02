class Persona  { 
    //constructor es el que construye la instancia del objeto
    constructor(prueba) {
        console.log("Se ejecuto el metodo constructor de la clase persona");
        console.log(prueba);
    }
    //Atributos
    //Metodos
}
class Mascota {
    constructor () { 
        console.log("Metodo constructor de la mascota");
    }
}

// Instancia= Creacionde un objeto a partirde una classe (molde)
const jhonDoe = new Persona("Un texto de prueba"); // Objeto
console.log(jhonDoe);

const puchi = new Mascota();
console.log(puchi);