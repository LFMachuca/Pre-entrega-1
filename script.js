//Declaracion de variables a utilizar
const fechasDisponibles = ['20/10/2024', '15/11/2024','24/12/2024']
let usuarioReserva;
let reservaSeleccionada;
let confirmacionReserva;

//Validacion de usuario
function solicitarUsuario(){
    let usuario
    do {
        usuario = prompt("Ingrese su Usuario:");
    
        if(usuario === ""){
            alert("Ingrese un usuario");
        }
    } while (usuario === "");
    return usuario;
};
// Mostrar fechas
function mostrarFechas(){
    let mensaje = "Seleccione una de las siguientes fechas:\n";

    for(let i = 0 ; i < fechasDisponibles.length; i++){
        mensaje+= '\nOpcion '+i+':' + fechasDisponibles[i] ;
    }
    return mensaje;
};
// seleccion de reserva
function seleccionarReserva(){

    let fechaReservaSeleccionada;
    let disponibilidad = false;
    
    fechaReservaSeleccionada = parseInt(prompt(mostrarFechas()));
    //Verificacion de la fecha seleccionada
    while(disponibilidad !== true){

        switch (fechaReservaSeleccionada) {
            case 0:
                alert("Esta fecha no esta disponible");
                break;
            case 1:
                alert("Esta fecha no esta disponible");
                break;
            case 2:
                disponibilidad = true;
                return fechaReservaSeleccionada;
                break;   
            default:
                alert("Por ahora no tenemos disponibilidad")
                break;
        };
        fechaReservaSeleccionada = parseInt(prompt(mostrarFechas()));
    }
}

function confirmarReserva(usuario){
    return confirm (usuario+', ¿Confirma la reserva?');
}

function realizarReserva(){
    usuarioReserva=solicitarUsuario();
    reservaSeleccionada=seleccionarReserva();
    confirmacionReserva=confirmarReserva(usuarioReserva);

    if (confirmacionReserva) {
        alert("Su reserva ya fue confirmada.\nMuchas gracias!");
    } else {
        alert("Una lastima. \nVuelva Prontos");
    }
}

//MAIN
realizarReserva();