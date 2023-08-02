
let minDigit = 0;
let maxDigit = 500;
let average ;

for (let i = minDigit; i <= maxDigit; i++){
    minDigit += i ;
}
average = minDigit / maxDigit;

console.log(`Среднее арифметическое числа ${minDigit} = ${average}`);


