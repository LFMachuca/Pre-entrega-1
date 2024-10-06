//Declaracion de variables a utilizar
let usuario;
let fechaReservaSeleccionada;
let disponibilidad = false;
let confirmacionReserva;

//Validacion de usuario
do {
    usuario = prompt("Ingrese su Usuario:");

    if(usuario === ""){
        alert("Ingrese un usuario");
    }
} while (usuario === "");


fechaReservaSeleccionada=parseInt(prompt("Seleccione una de las siguientes fechas: \nOpcion 1: 20/10/2024\nOpcion 2: 15/11/2024\nOpcion 3: 24/12/2024"));
//Verificacion de la fecha seleccionada
while(disponibilidad !== true){

    switch (fechaReservaSeleccionada) {
        case 1:
            alert("Esta fecha no esta disponible");
            break;
        case 2:
            alert("Esta fecha no esta disponible");
            break;
         case 3:
            disponibilidad = true;
            break;   
        default:
            alert("Por ahora no tenemos disponibilidad")
            break;
    };
    if(disponibilidad === true){
        break;
    }
    fechaReservaSeleccionada=parseInt(prompt("Seleccione una de las siguientes fechas: \nOpcion 1: 20/10/2024\nOpcion 2: 15/11/2024\nOpcion 3: 24/12/2024"));
};

//confiramcion de la seleccion.
confirmacionReserva=confirm(usuario + " Confirma la reserva?");
if (confirmacionReserva) {
    alert("Su reserva ya fue confirmada.\nMuchas gracias!");
} else {
    alert("Una lastima. \nVuelva Prontos");
}
