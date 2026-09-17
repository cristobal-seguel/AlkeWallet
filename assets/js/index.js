import Usuario from "./clases/Usuario.js";
const linkLogout = document.getElementById("link-logout");
const linkLogin = document.getElementById("link-login");
const linkSendMoney = document.getElementById("link-send-money");
const linkDeposit = document.getElementById("link-deposit");


linkLogout.addEventListener("click", ()=> {
    
    alert("Cerrando sesión...");

    Usuario.logout();

    location.href = "./index.html";
});


const main = () => {
    const usuario = new Usuario();
    const existeUsuario = usuario.actualizar();

    if(existeUsuario){
        linkLogout.classList.remove("d-none");
        linkSendMoney.classList.remove("d-none");
        linkDeposit.classList.remove("d-none");

        linkLogin.classList.add("d-none");


        //MENSAJE BIENVENIDA

        const parrafoSaludo = document.getElementById("mensaje-bienvenida");
        if(parrafoSaludo){
            parrafoSaludo.textContent= `Bienvenido a tu App Wallet, ${usuario.nombre} ${usuario.apellido}.`;
        }
        
    }
}

main();