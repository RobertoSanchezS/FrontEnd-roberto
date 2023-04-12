class Persona  { 
    #nombre; 
    #apellido; 
    #edad; 
    #mascota; 
    
    constructor(nombre, apellido) {
    
      this.#nombre = nombre;
      this.#apellido = apellido;
    
    }    
   
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
}

// extends - herencia = hereda todos los atributos y metodos de la clase principal

class Estudiante extends Persona {
    #curso;

    constructor (nombre, apellido) {
        // super() - acceder directamente al constructor de la clase principal
        super(nombre, apellido);
    }

    getCurso() {
        return this.#curso;
    }

    setCurso(curso) {
        if (curso instanceof Curso) {
        this.#curso = curso;
        }

    }
}
class Curso {
    #nombre;
    #materias = [];

    constructor(nombre) {
        this.#nombre = nombre;
    }
    
    getNombre () {
        return this.#nombre;
    }

    getMaterias() {
        return this.#materias;
    }

    setMateria(unaMateria) {
        this.#materias.push(unaMateria);
    }
}

const jhonDoe = new Estudiante("jhon", "Doe");
const cursoFrontend = new Curso("Frontend con JS");
cursoFrontend.setMateria({lenguaje: "HTML", cargaHoraria:24});
cursoFrontend.setMateria({lenguaje: "CSS", cargaHoraria:32});
cursoFrontend.setMateria({lenguaje: "JavaScript", cargaHoraria:680});

jhonDoe.setCurso(cursoFrontend);

console.log(`Hola, mi nombre es ${jhonDoe.getNombreCompleto()}`);
const cursoJhon = jhonDoe.getCurso();
// console.log(cursoJhon);
console.log(`Estoy cursando ${cursoJhon.getNombre()}`);
const materiasCursoJhon = cursoJhon.getMaterias();
for (const unaMateria of materiasCursoJhon) {
    console.log (`La materia ${unaMateria.lenguaje} tiene una carga horaria de ${unaMateria.cargaHoraria} horas.`);
}
