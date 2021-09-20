const boton = document.getElementById('btnEnviar') ;
boton.addEventListener('click',capturaDatos)
function capturaDatos(){
    let nombre = document.getElementById('inputNombre').value;
    let apellido = document.getElementById('inputApellido').value;
    let numero = document.getElementById('inputNumero').value;
    let direccion = document.getElementById('inputDireccion').value;
    console.log(nombre,apellido,numero,direccion);
}
