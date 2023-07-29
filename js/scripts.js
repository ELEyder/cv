// Clase para las imagenes y contador
class imagenes{
    constructor(...args){
        this.contador = 0;
        this.imagenes = args;
    }  
}
// Objetos
var img1 = new imagenes("img/miCara.png" , "img/miCara2.png");
var img2 = new imagenes("img/senati.png" , "img/senati2.png" , "img/senati3.png");

// Funcion de cambiar las imagenes
function cambiarImagen(id) {
    var fotoInicial = document.getElementById(id);
    if (id == "miFoto"){
        var imgFinal = img1
    } else {
        var imgFinal = img2
    }
    imgFinal.contador++;
    if (imgFinal.contador == imgFinal.imagenes.length){
        imgFinal.contador = 0;
    }
    fotoInicial.style.opacity = 0;
    setTimeout(function(){
        fotoInicial.src = imgFinal.imagenes[imgFinal.contador];
        fotoInicial.style.opacity = 1;
    }, 500);
};