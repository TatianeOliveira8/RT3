class Somador {
    public calcular = (numero1: number, numero2: number) => {
        return numero1 + numero2
    }
}
class Subtrador {
    public calcular = (numero1: number, numero2: number) => {
        return numero1 - numero2
    }
}



class Divisor {
    public calcular = (numero1: number, numero2: number) => {
        return numero1/numero2
    }
}

class Multiplicador {
    public calcular = (numero1: number, numero2: number) => {
        return numero1*numero2
    }
}

export {Somador, Subtrador, Divisor, Multiplicador}