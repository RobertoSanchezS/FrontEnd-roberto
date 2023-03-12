// map -- crea un nuevo array con  los resultados de llamada a la funcion indicada aplicados a cada uno de sus elementos
const notas = [2.5, 4, 6.3, 8, 3.4];

const notasPor2 = notas.map((unaNota) => {
    return unaNota * 2;
});

console.log(notasPor2);


const estudiantes = ["Juana", "Marina", "Pablo", "Pedro", "Raul", "Carolina"];

const agregarApellido = (unEstudiante) => {
    return `${unEstudiante} Doe`;
};

const estudiantesConApellido = estudiantes.map(agregarApellido);
console.log(estudiantes);
console.log(estudiantesConApellido);

// filter -- crea un nuevoarray con todos los elementos que cumplan con la condicion de la funcion dada

const notasSemestre = [5, 7, 3, 2, 1, 8, 10, 7];
const notasAprobadas = notasSemestre.filter((unaNota) => {
    return unaNota > 6;
})

console.log(notasAprobadas);

const nombres = ["Maria", "Pedro", "Carolina", "Walter", "Rocio", "Diego"];
const nombresLargos = nombres.filter((unNombre =>unNombre.length >=6));
console.log(nombresLargos);
console.log(nombresLargos.length);
