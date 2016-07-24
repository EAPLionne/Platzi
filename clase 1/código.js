// //alert: Función
// // () : Parámetros de la función
// // "" : Cadenas de texto
// var nombre = "Eva";
// var apellido = "De Álava";
// var edad = 18;

// alert (nombre + " " + apellido+ "\n" + edad + "años.")
// //espacio entre " " : Para dejar espacio.
// // \n : Salto de línea. EN HTML NO SIRVE.
// // <br /> : EN HTML
var peso;
var pesoEnMarte; // CamelCase

alert ("¿Quieres saber tu peso en marte?");
peso = prompt("¿Cuál es tu peso en Kg?", "70");
peso = parseInt(peso)
// parseInt o Number
// 70 es el valor predeterminado
pesoEnMarte = (peso / 9.81) * 3.711 ;

alert("Tu peso en marte es" + " " + pesoEnMarte + "Kg" );
