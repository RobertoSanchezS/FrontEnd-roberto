const personaUno = {
    nombre: "Javi",
    edad: 35,
    email: "javi@gmail.com",
    materias: ["Javascript", "React"],
    decirEdad: function () {
        if(this.edad < 18) {
            return "Lo siento, no puedo decir mi edad";
        }
        return this.edad;
    }
};

const personaDos = {
    nombre: "Caro",
    edad: 25,
    email: "Caro@gmail.com",
    materias: ["CSS", "Python"],
    decirEdad: function () {
        if(this.edad < 18) {
            return "Lo siento, no puedo decir mi edad";
        }
        return this.edad;
    }
};

const personaTres = {
    nombre: "Jane",
    edad: 45,
    email: "Jane@gmail.com",
    materias: ["Javascript", "React"],
    decirEdad: function () {
        if(this.edad < 18) {
            return "Lo siento, no puedo decir mi edad";
        }
        return this.edad;
    }
};

/*
  POO(Programacion Orientada Objetos)
  - Crear moldes es el objetivo #1
  - Un molde es algo que nos permite crear un objeto
  - El molde nos permite que todos los objetos tengan las mismas particularidades
  - Permiten crear objetos que puedan ejecutar funcionalidades
  - Tres pilares fundamentales de la POO:
      - Abstraccion
      - Polimorfismo
           -  Ave
           -  Avion
           -  Superman
      - Herencia
  - Principios SOLID
*/