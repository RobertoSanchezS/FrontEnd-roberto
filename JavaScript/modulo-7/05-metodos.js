class Persona  { 
    #nombre; // atributo privado
    #apellido; // atributo privado
    #edad; // atributo privado
    #mascota; // atributo privado
    //constructor es el que construye la instancia del objeto
    constructor(nombre, apellido) {
      //Atributos
      this.#nombre = nombre;
      this.#apellido = apellido;
    //   this.#edad = edad;
    }    
    //Metodos
    getNombre() {
        return this.#nombre;

    }

    getApellido() {
        return this.#apellido;
    }

    getNombreCompleto() {
        return `${this.#nombre} ${this.#apellido}`;
    }

    getEdad() {
        return this.#edad;
    }

    setEdad(edad) {
        this.#edad = edad;
    }
    
    getMascota() {
        return this.#mascota;
    }

    setMascota(laMascota) {
        if (laMascota instanceof Mascota) {
            this.#mascota = laMascota;
            return;
        }
        console.log("ERROR: Intentaste setear algo que no es una Mascota");
        console.log(`Estás en la persona ${this.getNombreCompleto()}`);
    }
    
}
class Mascota {
    #nombre; // atributo privado
    #tipo; // atributo privado
    constructor (nombre, tipo) {
        this.#nombre= nombre;
        this.#tipo = tipo;        
    }
    

    getInformacion() {
        return `${this.#nombre} - ${this.#tipo}`;
    }
}

// Instancia= Creacion de un objeto a partirde una classe (molde)
const jhonDoe = new Persona("jhon", "Doe"); // Objeto
jhonDoe.setEdad(37);
const mariaSmithers = new Persona("Maria", "Smithers"); // Objeto
mariaSmithers.setEdad(27);

const puchi = new Mascota("Puchi", "Perro"); 

mariaSmithers.setMascota("Una Mascota falsa");
mariaSmithers.setMascota(puchi);

console.log(jhonDoe.getNombreCompleto ());
console.log(jhonDoe.getEdad ());
console.log(mariaSmithers.getNombreCompleto ());
// console.log(mariaSmithers.getEdad ());
// console.log(mariaSmithers.getMascota ());
const mascotaMarie = mariaSmithers.getMascota();
console.log(mascotaMarie.getInformacion());
