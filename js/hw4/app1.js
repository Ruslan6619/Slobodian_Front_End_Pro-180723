let firstNumber = parseInt(prompt('Введите число1',0));
let secondNumber = parseInt(prompt('Введите число2',0));

if (firstNumber > secondNumber){
    console.log(`Первое число ${firstNumber} больше второго числа ${secondNumber}`);
}else if (secondNumber > firstNumber){
    console.log(`Второе число ${secondNumber} больше первого числа ${firstNumber}`);
}else if (firstNumber === secondNumber){
    console.log('Числа равны');
}else {
    alert('Упс,,, Вы не ввели число. Попробуйте снова.')
}
