//Selector
/* 
   -Nos permite buscar y recuperar un elemento en el DOM
   - Es una herramienta del DOM que nos va a permitir capturar elementos del documento.

   document.SELECTOR("tag || class || id");
   los selectores son metodos del objeto document
*/
const h1Tag = document.querySelector("h1");
console.log(h1Tag);

const h2Tag = document.querySelector("h2");
console.log(h2Tag);

const pTags = document.querySelectorAll("p");
console.log(pTags);
console.log(pTags.length);

const sub01 = document.querySelector("#sub01");
console.log(sub01);

const specialPa = document.querySelectorAll(".special-paragraph");
console.log(specialPa);

