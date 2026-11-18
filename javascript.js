
/* ====================================== */
/* INICIO DE SESION */
/* ====================================== */

// Capturamos los elementos HTML

const formLogin = document.getElementById("formLogin");

const pantallaLogin = document.getElementById("pantallaLogin");

const panelPrincipal = document.getElementById("panelPrincipal");

const mensajeLogin = document.getElementById("mensajeLogin");

const nombreUsuario = document.getElementById("nombreUsuario");

const btnCerrarSesion = document.getElementById("btnCerrarSesion");


// Credenciales de prueba

const usuarioCorrecto = "admin";

const contrasenaCorrecta = "1234";


// Variable para controlar la sesion

let sesionActiva = false;


// Evento para iniciar sesion

formLogin.addEventListener("submit", function(event) {

    event.preventDefault();

    // Obtenemos los datos del formulario

    let usuario = document.getElementById("usuario").value.trim();

    let contrasena = document.getElementById("contrasena").value;

    // Comprobamos las credenciales

    if (usuario === usuarioCorrecto &&
        contrasena === contrasenaCorrecta) {

        // Activamos la sesion

        sesionActiva = true;

        // Mostramos el nombre del usuario

        nombreUsuario.textContent = usuario;

        // Ocultamos el inicio de sesion

        pantallaLogin.hidden = true;

        // Mostramos el panel principal

        panelPrincipal.hidden = false;

        // Limpiamos el mensaje

        mensajeLogin.textContent = "";

        // Limpiamos el formulario

        formLogin.reset();

    } else {

        // Mensaje si los datos son incorrectos

        mensajeLogin.textContent =
            "Usuario o contraseña incorrectos.";

    }

});



/* ====================================== */
/* CERRAR SESION */
/* ====================================== */

// Evento para cerrar sesion

btnCerrarSesion.addEventListener("click", function() {

    if (sesionActiva === true) {

        // Desactivamos la sesion

        sesionActiva = false;

        // Ocultamos el panel principal

        panelPrincipal.hidden = true;

        // Mostramos el inicio de sesion

        pantallaLogin.hidden = false;

        // Limpiamos los campos

        formLogin.reset();

        // Mensaje inicial

        mensajeLogin.textContent =
            "La sesión se ha cerrado correctamente.";

        // Regresamos al inicio de la pagina

        window.scrollTo(0, 0);

    }

});
