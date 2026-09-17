import Usuario from "./clases/Usuario.js";

const usuario = new Usuario();
const existeUsuario = usuario.actualizar();

if (!existeUsuario) {
    location.href = "./index.html";
}

const formSendMoney = document.getElementById("form-send-money");
const outputSaldo = document.getElementById("output-saldo");
const sendContacto = document.getElementById("send-contacto");

outputSaldo.innerText = usuario.wallet.saldo;


let acumuladorOptions = "";
for (const contacto of usuario.contactos) {
    acumuladorOptions+= `<option value="${contacto}">${contacto}</option>`;
}

sendContacto.innerHTML = acumuladorOptions;


if (formSendMoney) {
    formSendMoney.addEventListener("submit", (event) => {
        try {
            event.preventDefault();

            let monto = Number(document.getElementById("send-monto").value);

            let nuevoMonto = usuario.wallet.transferir(monto);

            usuario.guardar();

            let mensaje = `Se ha transferido la suma de: ${monto} a su contacto: ${sendContacto.value}.`;
            alert(mensaje);

            outputSaldo.innerText = nuevoMonto;

            formSendMoney.reset();
        } catch (error) {
            alert("Se ha producido un error: " + error);
            console.log(error);
        }
    });
}
