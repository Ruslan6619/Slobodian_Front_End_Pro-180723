let digit = parseInt(prompt('Введите трехзначное число'));
let firstDigit = parseInt(digit / 100);
let secondDigit = parseInt((digit / 10) % 10);
let thirdDigit = parseInt(digit % 10);

if (firstDigit === secondDigit && secondDigit === thirdDigit && firstDigit === thirdDigit){
    console.log('Все цифры одинаковые');
}else if ((firstDigit === secondDigit) || (firstDigit === thirdDigit) || (secondDigit === thirdDigit)){
    console.log('есть одинаковые цифры')
}else {
    console.log('Одинаковых цифр не обнаруженно')
}