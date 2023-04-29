var email = document.getElementById('correo');
var direccion = document.getElementById('direccoin');
var ciudad = document.getElementById('ciudad');
var comuna = document.getElementById('comuna');
var numero = document.getElementById('numero');
var descripcion = document.getElementById('descripcion');
var error = document.getElementById('Error');

error.style.color = red;

function EnviarFormulario(){
    console.log('Enviando Formulario...');

    
    var mensajeError = [];
    
    if(email.value === null || email.value === ''){
        mensajeError.push('Debes ingresar un correo');
    }

    if(direccion.value === null || direccion.value === ''){
        mensajeError.push('Debes ingresar una direccion');
    }
    error.innerHTML = mensajeError.join(', ');
    
    return false;
}




