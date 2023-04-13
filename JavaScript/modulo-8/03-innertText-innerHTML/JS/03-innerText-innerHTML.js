// innerText
/* 
   podemos utilizar distintos metodos y propiedades para modificar (cambiar su estilo, atributos, agregar y eliminar elementos)
*/
const h1Tag = document.querySelector("h1");
h1Tag.innerHTML = `${h1Tag.innerText} <em>es lo mejor</em>`;
console.log(h1Tag.innerHTML);
console.log(h1Tag.innerText);

const bodyTag = document.querySelector("body");
const bodyContent = bodyTag.innerHTML;
console.log(bodyContent);

const firstP = document.querySelector("p");
firstP.innerText = firstP.innerText.toUpperCase();




