let minDigit = 30;
let maxDigit = 80;
let defaultDigit = 0;

for (let i = minDigit; i <= maxDigit; i++ ){

    if (i % 2 == 0){
        defaultDigit += i;
    }
}
console.log(defaultDigit);

