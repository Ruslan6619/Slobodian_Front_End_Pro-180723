function pow (num, degree){
    if (isNaN(num) || isNaN(degree) ){
        console.log('Вы не ввели число');
        return ;
    }
    if (degree !== 1){
        return num *= pow(num, degree - 1);
    }else {
        return num
    }
}
let digit = parseInt(prompt('Введите число'));
let exponentiation = parseInt(prompt('Введите степень'));

let result = pow(digit,exponentiation);

console.log(result);



