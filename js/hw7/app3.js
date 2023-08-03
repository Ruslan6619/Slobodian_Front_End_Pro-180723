let n = prompt('Введите  число');

for (let i = 1 ; i <= 100 ; i++ ){
    if (i * i <= n){
        console.log(`Квадрат числа ${i} не привышает числа ${n}`);
    }
}
