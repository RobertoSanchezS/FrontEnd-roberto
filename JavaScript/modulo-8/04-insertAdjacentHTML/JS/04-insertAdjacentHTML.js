// insertAdjacentHTML inserta y posiciona los nuevos resultantes en el arbol DOM
const dynamicContentTag = document.querySelector("#dynamicContent");

// 1er Arg = beforebegin (nos permite insertar el contenido antes del elemento) || afterbegin (nos permite insertar el contenido dentro del elemento, antes de su primer hijo) || beforeend (nos permite insertar el contenido dentro del elemento, despues de su ultimo hijo) || afterend (nos permite insertar el contenido despues del elemento)
// 2do Arg = contenido HTML
const students = [
  {
    name: "Caro",
    lastName: "TFSD",
    email: "Caro@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Jane",
    lastName: "TFSD",
    email: "jane@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Javi",
    lastName: "Smith",
    email: "javi@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
];

for (const oneStudent of students) {
  dynamicContentTag.insertAdjacentHTML(
    "beforeend",
    `
        <img src= ${oneStudent.avatar}/>
        <p class="special">${oneStudent.name} ${oneStudent.lastName}</p>
        <a href="mailto: ${oneStudent.email}">${oneStudent.email} </a>
                <hr />
      `
  );
}
