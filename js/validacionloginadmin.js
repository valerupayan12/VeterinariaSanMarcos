// validaciones.js

// Usuario administrador estático (solo para pruebas/demo)
const ADMIN_USER = {
    email: "admin@vet.cl",
    password: "Admin.123"
};

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (emailValue === ADMIN_USER.email && passwordValue === ADMIN_USER.password) {
            sessionStorage.setItem("usuarioLogueado", "admin");
            window.location.href = "index.html";
        } else {
            alert("Correo o contraseña incorrectos");
        }
    });
});