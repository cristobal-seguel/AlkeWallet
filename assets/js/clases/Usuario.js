import Wallet from "./Wallet.js"
const getUsuarios = async () => {

    let url = location.origin+"/usuarios.json";
    const response = await fetch(url);
    const data = await response.json();

    return data;
}


class Usuario {
    constructor(){
        this.id = "";
        this.nombre = "";
        this.apellido = "";
        this.email = "";
        this.wallet = ""
        this.contactos = []
    }

    #guardarUsuarioStorage(){
        localStorage.setItem("usuario", JSON.stringify(this));
    }

    actualizar(){
        let usuarioStorage = localStorage.getItem("usuario");

        if(!usuarioStorage) return false;

        usuarioStorage = JSON.parse(usuarioStorage);

        this.id = usuarioStorage.id;
        this.nombre = usuarioStorage.nombre;
        this.apellido = usuarioStorage.apellido;
        this.email = usuarioStorage.email;
        this.wallet = new Wallet(usuarioStorage.wallet.saldo);
        this.contactos = usuarioStorage.contactos

        return true;
    }

    async login(email, password){
        let usuarios = await getUsuarios();
        let usuario = usuarios.find(
            u => u.email == email.toLowerCase() && u.password == password.toLowerCase()
        );

        if(usuario){
            this.id = usuario.id;
            this.nombre = usuario.nombre;
            this.apellido = usuario.apellido;
            this.email = usuario.email;
            this.wallet = new Wallet(usuario.saldo);
            this.contactos = usuario.contactos
            
            this.#guardarUsuarioStorage();
            return true;
        }else{
            return false;
        }
    }


    guardar(){
        this.#guardarUsuarioStorage();
    }

    static logout(){
        localStorage.clear();
    }

}


export default Usuario;