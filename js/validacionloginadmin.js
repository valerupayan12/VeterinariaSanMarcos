// validaciones.js - Control de Acceso de Administración

// Objeto de usuario administrador estático (Credenciales de demostración/prueba)
const ADMIN_USER = {
    email: "admin@duocuc.cl",
    password: "Admin.123"
};

// Espera a que la estructura del documento HTML esté totalmente cargada antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
    // Captura del formulario e inputs de inicio de sesión
    const form = document.getElementById("login");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Escuchador para el evento 'submit' del formulario de login
    form.addEventListener("submit", (e) => {
        // Evita el envío por defecto y la recarga de la página
        e.preventDefault();

        // Limpieza de espacios en blanco en los campos ingresados
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // Comparación de los datos ingresados con las credenciales del usuario Administrador
        if (emailValue === ADMIN_USER.email && passwordValue === ADMIN_USER.password) {
            // Guarda el estado de autenticación en la sesión del navegador
            sessionStorage.setItem("usuarioLogueado", "admin");
            // Redirecciona al panel de administración
            window.location.href = "admin.html";
        } else {
            // Notificación en caso de credenciales incorrectas
            alert("Correo o contraseña incorrectos");
        }
    });
});