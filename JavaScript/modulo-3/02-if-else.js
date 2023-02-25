let clima = "soleado";
let horario = 3;
let dia = "domingo";

console.log((clima === "soleado" && horario < 18) || dia === "domingo");
if ((clima === "soleado" && horario < 18) || dia === "domingo"){
    let mensaje = "Vamos a dar un paseo";
    console.log(`ya que el clima esta ${clima}, y son las ${horario}, entonces ${mensaje}`);
    
} else{
    console.log("Mejor nos quedamos en casa a estudiar con javiScript");
}