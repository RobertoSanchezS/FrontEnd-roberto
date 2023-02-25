let day = "tuesday";
let dia;

switch (day) {
  case "monday":
    dia = "es Lunes";
    break;
  case "tuesday":
    dia = "es Martes";
    break;
  case "wednesday":
    dia = "es Miercoles";
    break;
  case "thursday":
    dia = "es Jueves";
    break;
  case "friday":
    dia = "es Viernes";
    break;
  case "saturday":
    dia = "es Sábado";
    break;
  default:
    dia = "es Domingo";
}
console.log(`El día es ${dia}`);