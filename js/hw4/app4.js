let number = parseInt(prompt('Введите число'));
let lastNumber = number % 10 ;

if (number % 2 === 0){
    console.log(`Вы ввели четное число, последняя введеная цифра ${lastNumber}`)
}else {
    console.log(`Вы ввели нечетное число, последняя введеная цифра ${lastNumber}`)
}