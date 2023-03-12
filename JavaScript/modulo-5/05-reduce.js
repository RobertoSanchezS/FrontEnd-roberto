// reduce -- permite hacer operaciones con los elementos del array
// reduce -- aplica una funcion a una acumulador y cada valor de una array ( izquierda a derecha ) para reducir a unico valor
// acum -- es un acumulador que al inicio no tendra valor
const notasDelSemestres = [8, 9, 3, 5, 7, 10, 2, 4.5];

const totalDeNotas = notasDelSemestres.reduce((acum,nota) => acum + nota);

// length te da la longitud del array
const promedioSemestre = Math.round(totalDeNotas / notasDelSemestres.length);

console.log(promedioSemestre);

const mascotas = ["Koen", "Azabache", "Rochelle"];
const callbackParaElReduce = (acum, mascota) => `${acum} ${mascota}`;
const todasLasMascostasJuntas = mascotas.reduce(callbackParaElReduce, "Mis mascotas se llaman: ");
// const todasLasMascostasJuntas = mascostas.reduce((acum, mascota) => `${acum}  ${mascota}`, " Mis mascotas se llaman:");
console.log(todasLasMascostasJuntas);
