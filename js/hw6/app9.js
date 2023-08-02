let digit = +prompt('Введите натуральное число');
let numberOfDivisors = 0;
let sum = 0;

for (let i = 2 ; i * 2 <= digit ; i++){

    if (digit % i == 0){
        console.log(`Делитель этого числа ${i}`);

        if ( i % 2 === 0 ){
            numberOfDivisors++;
            sum += i ;
        }
    }
}
console.log(`Количество четных делителей: ${numberOfDivisors}`);
console.log(`Сумма четных делителей: ${sum}`);