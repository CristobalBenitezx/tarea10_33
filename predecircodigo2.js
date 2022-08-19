function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}

/*
diagrama en t
variable = auntContactInfo
value = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]

*/
//console.log imprime infomacion personal 
//["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]

function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}

/* 
diagrama en t 
variable = produce
variable = frozen
value = ["manzanas", "naranjas"]
value = ["brócoli", "helado"]

*/
//console.log imprimir informacion personal 
// "manzanas","naranjas","brócoli","helado"

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

/*
diagrama en t
variable = movieLibrary
value = "Bambi", "E.T.", "Toy Story"
value = ("Zoro")
movieLibrary = "Beetlejuice"
*/