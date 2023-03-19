const marieSmithers = {
  nombre: "Marie Smithers",
  edad: 27,
  email: "marie.s@gmail.com",
  estaCasada: false,
  ubicacion: {
    pais: "Mexico",
    ciudad: "Ciudad de Mexico",
  },
  mascotas: ["Lucas", "Paco"],
  obtenerNombreEdad:function () {
    return `${this.nombre} - ${this.edad}`;
  },
  saludar: function () {
    return "Hola ¿cómo estás?";
  },
  // cuando THIS este dentro de una arrow function no hara referencia al objeto dentro del cual se encuentra si no hara referencia a un objeto global que tiene javascript

  // siempre que uses this dentro de un metodo de un objeto ese metodo tiene que ser una funcion normal con la palabra clave function 
    decirNombre: function () {
    return `Hola, mi nombre es ${this.nombre}`;
  },

  obtenerMascotas: function (indice) {
    if (indice < this.mascotas.length) {
    return `${this.mascotas[indice]}`;}
    return `Error, no existen mascotas en ese indice, intenta con un número menor a ${this.mascotas.length}`;
  },
};

console.log(marieSmithers.obtenerMascotas(9));
console.log(marieSmithers.obtenerNombreEdad());
console.log(marieSmithers.saludar());
console.log(marieSmithers.decirNombre());
