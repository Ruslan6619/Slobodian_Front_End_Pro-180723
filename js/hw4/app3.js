let firstNumber = parseInt(prompt('Введите первое число'));
let secondNumber = parseInt(prompt('Введите второе число'));

if (firstNumber % secondNumber === 0){
    console.log('Второе число является делителем');
}else {
    console.log('Второе число не является делителем')
}

 if (secondNumber % firstNumber === 0){
    console.log('Первое число является делителем');
}else {
     console.log('Первое число не является делителем')
 }