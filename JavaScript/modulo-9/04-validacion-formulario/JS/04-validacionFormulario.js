const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const countries = document.querySelector("#countries");
const message = document.querySelector("#message");
const contactForm = document.querySelector("#contactForm");
const alertDiv = document.querySelector("#alert");
// event.target -> sera el campo fullName(viene hacer el input)
// nextElementeSibling -> devuelve el elemente inmediatamente posterior al especificado
const fieldValidate = (event) => {
  const field = event.target;
  const fieldValue = field.value.trim();
  const spanTag = field.nextElementSibling;

  if (fieldValue === "") {
    spanTag.innerText = "Campo Obligatorio";
  } else if (field.type === "email") {
    const emailIsValid = isValidateEmail(fieldValue);
    if (!emailIsValid) {
      spanTag.innerText = "Formato de correo inválido";
    } else {
      spanTag.innerText = "";
    }
  } else {
    spanTag.innerText = "";
  }
};

const isValidateEmail = (string) => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regex.test(string);
};

fullName.addEventListener("blur", fieldValidate);
email.addEventListener("blur", fieldValidate);
countries.addEventListener("change", fieldValidate);
message.addEventListener("blur", fieldValidate);

contactForm.addEventListener("submit", (event) =>{
  event.preventDefault();
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();

  if (fullNameValue === "" || emailValue === ""){
    alertDiv.insertAdjacentHTML("beforeend", "<strong> Revisa el Formulario hay campos vacios</strong>");
    return;
  }

  alertDiv.innerHTML;
  contactForm.reset();
  console.log("Se envia la informacion");
});