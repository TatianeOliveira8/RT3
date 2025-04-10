import { Somador, Subtrador, Multiplicador, Divisor } from 'modulort3';
const a = 8;
const b = 2;
console.log("Soma:");
console.log(new Somador().calcular(a, b));
console.log("Subtração:");
console.log(new Subtrador().calcular(a, b));
console.log("Multiplicação:");
console.log(new Multiplicador().calcular(a, b));
console.log("Divisão:");
try {
    console.log(new Divisor().calcular(a, b));
    console.log("Divisão por zero:");
    console.log(new Divisor().calcular(a, 0));
}
catch (err) {
    console.log("Erro na divisão:");
    console.log(err.message || err);
}
