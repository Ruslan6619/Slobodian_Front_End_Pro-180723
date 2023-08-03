
const digit = parseInt(prompt("Введите целое число:"));

let primeNumber = true;

if (digit === 1) {
    primeNumber = false;
} else if (digit > 1) {
    for (let i = 2; i <= Math.sqrt(digit); i++) {
        if (digit % i === 0) {
            primeNumber = false;
        }
    }
}

console.log(`Число ${digit} ${primeNumber ? "простое" : "не простое"}`);
