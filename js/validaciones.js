// 1) Se Captura los elementos del HTML mediante sus IDs
let formulario = document.getElementById("login");
let email = document.getElementById("email");
let password = document.getElementById("password");

// 2) Se Escucha el evento cuando la persona presiona el botón de envío
formulario.addEventListener("submit", function(event){
    // Cancela el envío automático de la página para procesar la validación primero
    event.preventDefault();

    // VALIDACIÓN DEL CORREO CON DOMINIOS PERMITIDOS
    // La expresión regular restringe los correos exclusivamente a @gmail.com, @outlook.com o @duocuc.cl
    if (!/^[\w.-]+@(gmail\.com|outlook\.com|duocuc\.cl)$/i.test(email.value.trim())){
        alert("El correo solo permite dominios: @gmail.com, @outlook.com o @duocuc.cl");
        email.focus();
        return;
    }

    // VALIDACIÓN DE CONTRASEÑA
    // Exige al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password.value)){
        alert("La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.");
        password.focus();
        return;
    }

    // RESPUESTA FINAL
    // Si el código llega a esta parte significa que pasó TODOS los "if" anteriores sin detenerse
    alert("¡Validación correcta! Inicio de sesión exitoso.");
});


