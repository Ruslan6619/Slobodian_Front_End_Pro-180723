function doMath (x, znak, y){
    if (znak === '+'){
        return x + y;
    }else if (znak === '-'){
        return x - y ;
    }else if (znak === '*'){
        return x * y ;
    }else if (znak === '/') {
        if (y !== 0){
            return x / y;
        }else {
            return "Ошибка: деление на ноль недопустимо";
        }

    }else if (znak === '%') {
        return x % y;
    }else if (znak === "^"){
        return Math.pow(x,y);
    }else {
        return "Ошибка: неподдерживаемый математический знак";
    }

}

let firstDigit = parseFloat(prompt("Введите первое число:"));
let secondDigit = parseFloat(prompt("Введите второе число:"));
let znak = prompt("Введите математический знак (+, -, *, /, %, ^):");

let result = doMath(firstDigit,znak,secondDigit);

console.log('Результат :' , result);