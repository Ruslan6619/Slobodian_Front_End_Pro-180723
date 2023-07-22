//1
let years = prompt('Enter User name')
alert(`Hello, ${years}! How are you?`);



//2
let defaultValue = 0;
let firstNumber = prompt('Enter firs number', defaultValue);
let secondNumber = prompt('Enter second number', defaultValue);

let sum = parseInt(firstNumber) + parseInt(secondNumber);
console.log(sum)

let minus = parseInt(firstNumber) - parseInt(secondNumber);
console.log(minus)

let multiply = parseInt(firstNumber) * parseInt(secondNumber);
console.log(multiply)

let divide = parseInt(firstNumber) / parseInt(secondNumber);
console.log(divide)



//3

let firstNumber2 = prompt('Enter firs number');
let secondNumber2 = prompt('Enter second number');

let strictEquality = firstNumber2 === secondNumber2;
console.log(strictEquality);


//4

let firstNumber3 = prompt('Enter firs number');
let secondNumber3 = prompt('Enter second number');
let thirdNumber = prompt('Enter third number');
let totalNumber = 3 ;

let averageValues = (parseInt(firstNumber3) + parseInt(secondNumber3) + parseInt(thirdNumber)) / totalNumber ;
console.log(averageValues);




//5

let digit = 12345;
let modularDivision1 = digit % 10;


let minus1 = digit - 5;
let divide1 = minus1 / 10 ;
let modularDivision2 = divide1 % 10;


let minus2 = digit - 45 ;
let divide2 = minus2 / 100;
let modularDivision3 = divide2 % 10 ;



let minus3 = digit - 345 ;
let divide3 = minus3 / 1000;
let modularDivision4 = divide3 % 10 ;


let minus4 = digit - 2345 ;
let divide4 = minus4 / 10000;
let modularDivision5 = divide4 % 10 ;

console.log(`${modularDivision5} ${modularDivision4} ${modularDivision3} ${modularDivision2} ${modularDivision1}`);

