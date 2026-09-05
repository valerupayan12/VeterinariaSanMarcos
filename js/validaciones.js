// 1) Captura de los elementos del HTML mediante sus IDs para poder interactuar con ellos en JavaScript
let formulario = document.getElementById("registro-mascota");
let nombre = document.getElementById("nombre");
let rut = document.getElementById("rut");
let email = document.getElementById("email");
let password = document.getElementById("password");
let telefono = document.getElementById("telefono");
let nombreMascota = document.getElementById("nombre-mascota");
let tipoMascota = document.getElementById("tipo-mascota");
let microchip = document.getElementById("microchip");

// 2) Escuchador de eventos: Detecta el momento exacto en que la persona presiona el botón de envío
formulario.addEventListener("submit", function(event){
    // Cancela el comportamiento por defecto del formulario (evita que la página se recargue antes de validar)
    event.preventDefault();

    // 3) Validación del campo 'Nombre completo del dueño'
    // .trim() elimina espacios sobrantes al inicio/final y .length mide la cantidad de caracteres
    if (nombre.value.trim().length < 10){
        alert("El nombre completo debe tener al menos 10 caracteres.");
        nombre.focus(); // Ubica el cursor en este campo para facilitar la corrección
        return; // Detiene la ejecución de la función si la validación falla
    }

    // 4) Validación del campo 'RUT del dueño' mediante Expresión Regular (Regex)
    // Formato requerido: 7 u 8 dígitos, un guión, y un dígito verificador (número o letra K)
    if (!/^[0-9]{7,8}-[0-9Kk]{1}$/.test(rut.value.trim())){
        alert("El RUT debe tener el formato 12345678-9");
        rut.focus();
        return;
    }

    // 5) Validación del campo 'Email del dueño'
    // Regex que restringe los dominios permitidos únicamente a: @gmail.com, @outlook.com o @duocuc.cl
    if (!/^[\w.-]+@(gmail\.com|outlook\.com|duocuc\.cl)$/i.test(email.value.trim())){
        alert("El correo solo permite dominios: @gmail.com, @outlook.com o @duocuc.cl");
        email.focus();
        return;
    }

    // 6) Validación del campo 'Contraseña del dueño'
    // Comprueba que tenga al menos 8 caracteres, una mayúscula, un número y un carácter especial
    if (password && (
        password.value.trim().length < 8 ||             // Requisito de longitud mínima
        !/[A-Z]/.test(password.value) ||                 // Al menos una letra mayúscula
        !/\d/.test(password.value) ||                    // Al menos un número
        !/[^A-Za-z0-9]/.test(password.value)             // Al menos un símbolo/carácter especial
    )) {
        alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.");
        password.focus();
        return;
    }

    // 7) Validación del campo 'Teléfono del dueño'
    // Permite formato chileno opcional (+56 9 1234 5678) o 8 dígitos móviles directos
    if (!/^\+?56?\s?9?\s?\d{8}$/.test(telefono.value.trim())){
        alert("El teléfono debe tener el formato +56 9 1234 5678");
        telefono.focus();
        return;
    }

    // 8) Validación del campo 'Nombre de la mascota'
    if (nombreMascota.value.trim().length < 5){
        alert("El nombre de la mascota debe tener al menos 5 caracteres.");
        nombreMascota.focus();
        return;
    }

    // 9) Validación del campo 'Tipo de mascota' (Select/Desplegable)
    // Verifica que el usuario haya seleccionado una opción distinta al valor por defecto (vacío)
    if (tipoMascota.value === ""){
        alert("Debe seleccionar el tipo de mascota.");
        tipoMascota.focus();
        return;
    }

    // 10) Validación del campo opcional 'Microchip'
    // Si el campo existe y no está vacío, exige que contenga únicamente números y un mínimo de 5 dígitos
    if (microchip && microchip.value.trim() !== "" && !/^\d{5,}$/.test(microchip.value.trim())){
        alert("El microchip debe tener al menos 5 números.");
        microchip.focus();
        return;
    }

    // Mensaje de éxito si el formulario supera todas las validaciones sin interrupciones
    alert("¡Registro correcto!");
});