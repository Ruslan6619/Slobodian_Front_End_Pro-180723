let number = parseInt(prompt('Введите число'));
let degree = 1 ;
let digit = 3 ;
let result = 1;

while (result < number){
    result = digit ** degree ;
    degree++
}
if (result === number){
    console.log(`Число ${number} можно получить путем возведения 3 в степень ${degree - 1}`);
} else {
    console.log(`Число ${number} нельзя получить путем возведения 3 в степень`);
}
