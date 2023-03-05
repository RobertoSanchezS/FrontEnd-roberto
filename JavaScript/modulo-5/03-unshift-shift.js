const superHeroes = ["Superman", "Wonder Woman", "Flash", "Batman"];

//unshift- añade un elemento al inicio del array
superHeroes.unshift("Roberto", "Profesor X", "Spiderman", "Black Widow");

const elPrimero = superHeroes.shift();
console.log(elPrimero);
console.log(superHeroes);