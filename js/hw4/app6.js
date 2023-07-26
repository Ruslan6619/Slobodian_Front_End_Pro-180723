let digit = parseInt(prompt('Введите трехзначное число'));
let firstDigit = parseInt(digit / 100);
let secondDigit = parseInt((digit / 10) % 10);
let thirdDigit = parseInt(digit % 10);

let sum = firstDigit + secondDigit + thirdDigit;
let numberMultip = firstDigit * secondDigit * thirdDigit;


if (sum % 2 === 0){
    console.log(`Сумма цифр ${digit} четная (${sum})`);
}else {
    console.log(`Сумма цифр ${digit} нечетная (${sum})`)
}

if (sum % 5 === 0){
    console.log(`Сумма цифр ${digit} кратна 5`);
}else {
    console.log(`Сумма цифр ${digit} некратна 5`)
}


if (numberMultip > 100){
    console.log(`Произведение чисел ${digit} больше 100 (${numberMultip})`)
}else if (numberMultip === 100){
    console.log(`Произведение чисел ${digit} равно 100 (${numberMultip})`)
} else if (numberMultip < 100) {
    console.log(`Произведение чисел ${digit} меньше 100 (${numberMultip})`)
}else {
    alert('вы не ввели число')
}