// foreach -- ejecuta una accion por cada elemento que encuentre en el arreglo, no retorna nada 
const superHeroes = ["Superman", "Wonder Woman", "Spiderman", "Iron Man", "Black Panther", "Black Widow"];

//opcion 1
// const nuevoArray = [];
// superHeroes.forEach((heroe) => {
//     nuevoArray.push(heroe);
// });
// console.log(nuevoArray);

//opcion 2
const nuevoArray = [];
superHeroes.forEach((heroe) => {
 if (heroe.length> 10){
    nuevoArray.push(heroe);
 }

});

console.log(nuevoArray);

const nuevoArray2 = superHeroes.map(heroe => heroe.length >10);
console.log(nuevoArray2);

const nuevoArray3 = superHeroes.filter(heroe => heroe.length >10);
console.log(nuevoArray3);
