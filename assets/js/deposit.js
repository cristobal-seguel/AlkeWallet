import Usuario from "./clases/Usuario.js";

const usuario = new Usuario();
const existeUsuario = usuario.actualizar();

if(!existeUsuario){
    location.href = "./index.html"; 
}


const formDeposit = document.getElementById("form-deposit");
const outputSaldo = document.getElementById("output-saldo");

outputSaldo.innerText = usuario.wallet.saldo;

if(formDeposit){

    formDeposit.addEventListener("submit", (event) => {

        try {
            event.preventDefault();
    
            
            let monto = Number(document.getElementById("deposit-monto").value);

            let nuevoMonto = usuario.wallet.depositar(monto);

            usuario.guardar();

            let mensaje = `Se ha depositado correctamente el  monto de ${monto}.`;
            alert(mensaje);

            outputSaldo.innerText = nuevoMonto;

            formDeposit.reset();

        } catch (error) {
            alert("Se ha producido un error: "+ error);
            console.log(error);
        }
    })
}


