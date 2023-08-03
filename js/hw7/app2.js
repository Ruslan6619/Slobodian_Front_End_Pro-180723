
let dollar = 27;
let minDigit = 10;
let maxDigit = 100;

for (let i = minDigit ; i <= maxDigit; i= i + 10 ){
    minDigit = i * dollar

    console.log(`${i} долларов = ${minDigit} гривень`);
}
