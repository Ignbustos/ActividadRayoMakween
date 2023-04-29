// Variables pagina 'Contacto'
var email = document.getElementById('correo');
var direccion = document.getElementById('direccoin');
var ciudad = document.getElementById('ciudad');
var comuna = document.getElementById('comuna');
var numero = document.getElementById('numero');
var descripcion = document.getElementById('descripcion');

// Variables pagina 'Registro'

var nombres = document.getElementById('Nombres');
var Apellidos = document.getElementById('Apellidos');
var Contraseña = document.getElementById('Contraseña');
var Correo = document.getElementById('Correo')
var Terminos = document.getElementById('Terminos');

// Variable color 'Error'
var error = document.getElementById('Error');

// Funcion Datos 'Contacto'
function EnviarFormularioContacto(){
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

// Funcion datos 'Registro'
function EnviarFormularioRegistro(){
    console.log('Enviando Formulario...');

    
    var mensajeError = [];
    
    if(Nombres.value === null || Nombres.value === ''){
        mensajeError.push('Debes ingresar un Nombre');
    }
    if(Apellidos.value === null || Apellidos.value === ''){
        mensajeError.push('Debes ingresar un Apellido');
    }
    // error.innerHTML = mensajeError.join(', ');
    
    return false;
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario() {
    var Nombres = document.getElementById('Nombres').value;
    if(Nombres.length == 0) {
    alert('No has escrito nada en el Nombre');
    return;
    }
    var Contraseña = document.getElementById('Contraseña').value;
    if (Contraseña.length < 6) {
    alert('La Contraseña no es válida');
    return;
    }
    this.submit();
}