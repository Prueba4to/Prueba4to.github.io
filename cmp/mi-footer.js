"use strict";
var forma = document.getElementById("forma"),
        campos = ["clave", "nombre", "telefono", "fecha"],
        salidas = ["salidaClave", "salidaNombre", "salidaTelefono", "salidaFecha"];

forma.addEventListener("submit", procesa, false);

function procesa() {

    for (let i = 0, longitud = campos.length; i < longitud; i++) {
        let campo = forma[campos[i]];
        let salida = document.getElementById(salidas[i]);
        salida.value = campo.value;
    }

    var fechaValueAsDate = salidas.valueAsDate,
            fecha = new Date(salidas.value);

    mifecha = (fecha.getDate() + 1) + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
    salidaFecha= mifecha;


}
