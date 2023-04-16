// const body = document.querySelector("body");

// window.onload = function() {
//   console.log("OK perfecto se cargo todo");
// }

// Event Handlers
// /* onload - es un evento que se activa cuando se termina de cargar una pagina*/
// window.onload = function () {
//   const mainTitle = document.querySelector("h1");
//   mainTitle.style.color = "red";
// };

// window.onload = function () {
//   const allParagraphs = document.querySelectorAll("p");
//   for (const paragraph of allParagraphs) {
//     paragraph.style.backgroundColor = "salmon";
//   }
// };

// /* addEventListener - permite agregar mas de un Handlers sin que pise al otro  */

/* 
   1.String => Nombre de evento (sin el on)
   2.Function => Callback - Event Handler
*/

// window.addEventListener("load", () => {
//   const allParagraphs = document.querySelectorAll("p");
//   for (const paragraph of allParagraphs) {
//     paragraph.style.backgroundColor = "salmon";
//   }
// });

// window.addEventListener("load", () => {
//   const mainTitle = document.querySelector("h1");
//   mainTitle.style.color = "red";
// });



/*-------------------------------------------------------------*/
const body = document.querySelector("body");
const btn01 = document.querySelector("#btn01");

const colors = ["yellow", "orange", "green", "red", "pink", "olive", "salmon"];

btn01.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * colors.length);
  const choosenColor = colors[randomNumber];
  body.style.backgroundColor = choosenColor;

});
const btn02 = document.querySelector("#btn02"); 
const cssClasses = ["dark", "cream", "mistery"];

// dblclick (doble click), click(ejecuta cuando le damos click a un boton)
// mouseover (es cuando el mouse pasa por encima del elemento) mouseenter (el )
btn02.addEventListener("mouseover", () => {
  const randomNumber = Math.floor(Math.random() * cssClasses.length);
  const choosenColor = cssClasses[randomNumber];
  body.style.backgroundColor = "";
  body.classList.remove(...cssClasses);
  body.classList.add(choosenColor);
});
