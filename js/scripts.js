// Clase para las imagenes y contador
class imagenes{
    constructor(...args){
        this.contador = 0;
        this.imagenes = args;
    }  
}
// Objetos
var img1 = new imagenes("img/miCara.png" , "img/miCara2.png");
var img2 = new imagenes("img/senati.png" , "img/senati2.png");

// Funcion de cambiar las imagenes
function cambiarImagen(id) {
    var fotoInicial = document.getElementById(id);
    if (id == "miFoto"){
        img1.contador++;
        if (img1.contador == img1.imagenes.length){
            img1.contador = 0;
        }
        fotoInicial.style.opacity = 0;
        setTimeout(function(){
            fotoInicial.src = img1.imagenes[img1.contador];
            fotoInicial.style.opacity = 1;
        }, 500);
    } else {
        img2.contador++;
        if (img2.contador == img2.imagenes.length){
            img2.contador = 0;
        }
        fotoInicial.style.opacity = 0;
        setTimeout(function(){
            fotoInicial.src = img2.imagenes[img2.contador];
            fotoInicial.style.opacity = 1;
        }, 500);
    }
    
};