class Somador {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 + numero2;
        };
    }
}
class Subtrador {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 - numero2;
        };
    }
}
class Divisor {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 / numero2;
        };
    }
}
class Multiplicador {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 * numero2;
        };
    }
}
export { Somador, Subtrador, Divisor, Multiplicador };
