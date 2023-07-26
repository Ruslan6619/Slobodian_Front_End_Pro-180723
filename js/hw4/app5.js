let digit = parseInt(prompt('Введите двузначное число'));
let secondDigit = digit % 10;
let firstDigit = (digit - secondDigit) / 10;

if (firstDigit > secondDigit){
    console.log(`Первая цифра больше второй`)
}else if (secondDigit > firstDigit){
    console.log(`Вторая цифра больше первой`)
}else if (firstDigit === secondDigit){
    console.log('Цифры равны')
}