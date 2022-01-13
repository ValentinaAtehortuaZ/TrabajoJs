/*let nombre="Juan"
let etiquetaImagen=document.getElementById("imagen1")
etiquetaImagen.src="Artistas/img/Miley Cyrus.jpg"
//etiquetaImagen.src=""

// se crea referncia al videoeeee
let etiquetaVideo=document.getElementById("video1")
etiquetaVideo.src="Artistas/videos/video2.mp4"

// se crea referencia para el nombre de la artista
let etiquetanombreArtista=document.getElementById("texto1")
etiquetanombreArtista.textContent=" Miley Cyrus"

// se crea referencia para la fecha del concierto
let etiquetafechaConcierto=document.getElementById("texto2")
etiquetafechaConcierto.textContent=" se presetará el proximo 23 Noviembre 2022."*/


// rutina para detectar el clic sobre un boton

let botonCambio=document.getElementById("boton")
botonCambio.addEventListener("click",cambiarArtistas)

 function cambiarArtistas(){
     //console.log(" Estas haciendo clic ")
 let etiquetaImagen=document.getElementById("imagen1")
etiquetaImagen.src="Artistas/img/Miley Cyrus.jpg"

let etiquetaVideo=document.getElementById("video1")
etiquetaVideo.src="Artistas/videos/video2.mp4"

let etiquetafechaConcierto=document.getElementById("texto2")
etiquetafechaConcierto.textContent=" se presetará el proximo 23 Noviembre 2022."
 }


 