let clima = "soleado";
let horario = 3;
let dia = "domingo";

if (clima === "soleado" && horario < 18 ){
    let mensaje = "Vamos a dar un paseo";
    console.log(`ya que el clima esta ${clima}, y son las ${horario}, entonces ${mensaje}`);
} else if (dia === "domingo"){
    console.log("ok, no hace sol y esta algo tarde, pero es domingo vamos a dar un paseo");
} else {
    console.log("mejor nos quedamos en casa a estudiar con javiScript");
}