class Wallet {
    constructor(saldo){
        this.saldo = saldo;
    }

    depositar(monto){
        this.saldo += Number(monto);
        return this.saldo;
    }

    transferir(monto){
        this.saldo -= monto;
        return this.saldo;
    }
}


export default Wallet;

