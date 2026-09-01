// 1) Se Captura los elementos del HTML mediante sus IDs
let formulario = document.getElementById("registro-mascota");
let nombre = document.getElementById("nombre");
let rut = document.getElementById("rut");
let email = document.getElementById("email");
let password = document.getElementById("password");
let telefono = document.getElementById("telefono");
let nombreMascota = document.getElementById("nombre-mascota");
let tipoMascota = document.getElementById("tipo-mascota");
let microchip = document.getElementById("microchip");

// 2) Se Escucha el evento cuando la persona presiona el botón de envío
formulario.addEventListener("submit", function(event){
    event.preventDefault();

    // 3) validacion campo nombre dueño 
    if (nombre.value.trim().length < 10){
        alert("El nombre completo debe tener al menos 10 caracteres.");
        nombre.focus();
        return;
    }
    // 4) validacion campo rut dueño
    if (!/^[0-9]{7,8}-[0-9Kk]{1}$/.test(rut.value.trim())){
        alert("El RUT debe tener el formato 12345678-9");
        rut.focus();
        return;
    }
    // 5) validacion campo email dueño
    if (!/^[\w.-]+@(gmail\.com|outlook\.com|duocuc\.cl)$/i.test(email.value.trim())){
        alert("El correo solo permite dominios: @gmail.com, @outlook.com o @duocuc.cl");
        email.focus();
        return;
    }
    // 6) validacion campo contraseña dueño
    if (password && (
        password.value.trim().length < 8 ||
        !/[A-Z]/.test(password.value) ||
        !/\d/.test(password.value) ||
        !/[^A-Za-z0-9]/.test(password.value)
    )) {
        alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.");
        password.focus();
        return;
    }
    // 7) validacion campo telefono dueño
    if (!/^\+?56?\s?9?\s?\d{8}$/.test(telefono.value.trim())){
        alert("El teléfono debe tener el formato +56 9 1234 5678");
        telefono.focus();
        return;
    }
    // 8) validacion campo nombre mascota
    if (nombreMascota.value.trim().length < 5){
        alert("El nombre de la mascota debe tener al menos 5 caracteres.");
        nombreMascota.focus();
        return;
    }
    // 9) validacion campo tipo mascota
    if (tipoMascota.value === ""){
        alert("Debe seleccionar el tipo de mascota.");
        tipoMascota.focus();
        return;
    }
    // 10) validacion campo microchip mascota
    if (microchip && microchip.value.trim() !== "" && !/^\d{5,}$/.test(microchip.value.trim())){
        alert("El microchip debe tener al menos 5 números.");
        microchip.focus();
        return;
    }

    alert("¡Registro correcto!");
});


