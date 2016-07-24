//var menu = ["Productos","Ventas","Contacto"];
//document.write( menu );
               //menu [2] : ventas

//DAFO = [ ["Devilidades" ,"Amenazas"] , ["Fortalezas" , "Oportunidades"] ];

//cument.write ( DAFO );
				// DAFO [0] : Devilidades,Amenazas
				// DAFO [0][0] : Devilidades
				// DAFO [0][1] : Amenazas


function explosion()
{
	alert("BOOM!!")
	documento.write (" <h1> BOOM! Elegiste un area minada :( </h1>");
}


function ganaste()
{
	document.write("Eres un ganador :) ");
}

var campo = [ [1 , 0 , 0 ] ,
			  [0 , 1 , 0 ] ,
			  [1 , 1 , 1 ] ] ;

			  // Los 1 son bombas

//if (campo [1][0] == 1 )

// {
//   explosion();
// }


//else
// {
// ganaste();
// }


var textos = ["Cesped", "Bomba"];


var x, y;

alert ("Esatás en un campo minado \n" +
	  "Elige una posición entre el 0 y el 2 para X y para Y");

x = prompt ("Posición en X?");
y = prompt ("Posición en Y?");

var posicion = campo[x][y];

document.write( textos[posicion] );











