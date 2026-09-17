import Usuario from "./clases/Usuario.js"

if(localStorage.getItem("usuario")){
    location.href = "./index.html";
}

const formLogin = document.getElementById("form-login");

if(formLogin){
    
    formLogin.addEventListener("submit", async (event) => {
        try {
            event.preventDefault();

            const loginEmailDom = document.getElementById("login-email");
            const loginPasswordDom = document.getElementById("login-password");

            let email = loginEmailDom.value;
            let password = loginPasswordDom.value;

            let usuario = new Usuario();

            let respuesta = await usuario.login(email, password);

            if(!respuesta) return alert("Login fallido, vuelva a intentar...");

            alert("Inicio de sesión correcto... será redireccionado a la página principal.");

            location.href = "./index.html";

            
        } catch (error) {
            alert("Ha ocurrido el siguiente error: " + error);
        }
    })
}