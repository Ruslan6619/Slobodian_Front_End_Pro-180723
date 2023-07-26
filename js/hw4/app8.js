let digit = parseInt(prompt('Введите шестизначное число'));

let firstDigit = parseInt(digit / 100000);
let secondDigit = parseInt((digit / 10000) % 10);
let thirdDigit = parseInt((digit / 1000) % 10);
let fourthDigit = parseInt((digit / 100) % 10);
let fifthDigit = parseInt((digit / 10) % 10);
let sixthDigit = parseInt(digit % 10);

if ((firstDigit === sixthDigit) && (secondDigit === fifthDigit) && (thirdDigit === fourthDigit)){
    console.log(`Число ${digit} зеркальное`)
}else {
    console.log(`Число ${digit} не зеркальное`)
}