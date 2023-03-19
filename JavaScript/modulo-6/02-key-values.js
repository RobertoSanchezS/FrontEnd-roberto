// const personaUno = ["john done", 30, "jhon@gmail.com", ["Colombiano", "Bogotá"]];

// const personaDos = ["john done", 30, "jhon@gmail.com", ["Colombiano", "Bogotá"], "correo@gmail.com"];

const marieSmithers = {
    nombre: "Marie Smithers",
    edad: 27,
    email: "marie.s@gmail.com",
    estaCasada: false,
    ubicacion: {
        pais: "Mexico",
        ciudad: "Ciudad de Mexico",
    }
};

console.log(marieSmithers.nombre);
console.log(marieSmithers.edad);
console.log(marieSmithers["email"]);
console.log(marieSmithers.ubicacion.ciudad);
console.log(marieSmithers.mascotas);

const jhonDoe = {
    email: "jonh.d@email.com",
    edad: 32,
    ubicacion: {
        ciudad: "Bogotá",
        país: "Colombia",
    },
    nombre: "john doe",
    mascota: ["puchi", "Michi"],   
}
console.log(jhonDoe.mascota[0]);
console.log(jhonDoe.mascota[1]);
