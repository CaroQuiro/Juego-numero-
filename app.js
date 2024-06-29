
let numeroSecreto=0;
let intentos =1;
let listaNumerosSorteados=[];
let numeroMax=10;
condicionesIniciales();



function verificarIntento() {
    let valorUsuario = parseInt(document.getElementById("usu").value);
    if(valorUsuario==numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    }else{
        if(valorUsuario>numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor');
        }else{
        asignarTextoElemento('p','El numero secreto es mayor');
        };
        intentos++;
        limpiarCaja();
    };
};

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Indica el numero del 1 al 10');
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1; 
    console.log(numeroSecreto);
};
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
};
  
function limpiarCaja(){
    let valorCaja=document.querySelector('#usu');
    valorCaja.value='';
};
  
function asignarTextoElemento(elemento, texto){
    let titulo=document.querySelector(elemento);
titulo.innerHTML = texto;

};

function generarNumeroAleatorio(){
    let numeroSor= Math.floor(Math.random()*numeroMax)+1;
    if(listaNumerosSorteados.length<numeroMax){
        if(listaNumerosSorteados.includes(numeroSor)){
            return generarNumeroAleatorio();
        }else{
            listaNumerosSorteados.push(numeroSor);
            return numeroSor;
        };
    }else{
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros');
    }
};


