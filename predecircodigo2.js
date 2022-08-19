function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}

//console.log imprime infomacion personal ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]//

/*
diagrama en t
variable | valores
auntContactInfo  ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]

*/

function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}

//console.log imprimir informacion personal  "manzanas","naranjas","croqueta de papa"

/* 
diagrama en t 
variable | valores 
produce  ["manzanas", "naranjas"]
 frozen  ["brócoli", "helado"]
 frozen.push ("croqueta de papa")

*/

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

/*console.log inprimir informacion personal ["Bambi", "E.T.", "Toy Story"], ("Zoro"), ["Beetlejuice"]*/

/*
diagrama en t
varibles | valores 
movieLibrary   ["Bambi", "E.T.", "Toy Story"];
movieLibrary   ["Bambi", "E.T.", "Toy Story" ,"Zoro"];
movieLibrary[1] = ["Bambi", "Beetlejuice", "Toy Story" ,"Zoro"];
*/


