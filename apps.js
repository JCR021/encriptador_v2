var encriptado = document.querySelector(".encrypt");
var decriptado = document.querySelector(".decrypt");
var resultado = document.querySelector(".texto-resultado");
var nino = document.querySelector(".nino");
var contenedor = document.querySelector(".encontra");

encriptado.onclick= encriptar;
decriptado.onclick = desencriptar;

function  encriptar() {
    ocultarAdelante();
    var caja = recuperarTexto();
    resultado.textContent = encriptarTexto(caja);
}

function  desencriptar() {
    ocultarAdelante();
    var caja = recuperarTexto();
    resultado.textContent = desencriptarTexto(caja);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".mensaje")
    return cajatexto.value
}

function ocultarAdelante(){
    nino.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".copiar"); 
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent; 
    navigator.clipboard.writeText(contenido);
});

