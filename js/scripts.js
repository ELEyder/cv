let contador = 0;
var largo = 0;
const imagenes = ["img/miCara.png" , "img/miCara2.png"];
largo = imagenes.length;
function cambiarImagen() {
    var fotoInicial = document.getElementById('miFoto');
    contador++;
    if (contador == largo){
        contador = 0;
    }
    fotoInicial.style.opacity = 0;
    setTimeout(function(){
        fotoInicial.src = imagenes[contador];
        fotoInicial.style.opacity = 1;
        
    }, 500);

};