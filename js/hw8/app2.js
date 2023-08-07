let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] ;
let sum = 0 ;
let quantity = 0;
let maxValue = arr[0];
let positionMax =  0;
let minValue = arr[0];
let positionMin = 0;
let numberOfNegative = 0;
let evenPositiveElements = 0;
let oddPositiveElements = 0;
let sumEvenPositiveElements = 0;
let sumOfOddPositiveElements = 0;
let productOfPositiveElements = 1;
let maxDigit = arr[0];



for (let i = 0 ; i <= arr.length ; i++){
    if (arr[i] > 0){
        sum += arr[i]
        quantity += arr[i] > 0
    }
    if (arr[i] < minValue){
        minValue = arr[i]
        positionMin = i
    }
    if (arr[i] > maxValue){
        maxValue = arr[i]
        positionMax = i
    }
    if (arr[i] < 0){
        numberOfNegative += arr[i] < 0
    }
    if (arr[i] > 0 && arr[i] % 2 === 0){
        sumEvenPositiveElements += arr[i]
        evenPositiveElements++
    }
    if (arr[i] > 0 && arr[i] % 2 !== 0){
        sumOfOddPositiveElements += arr[i]
        oddPositiveElements ++
    }
    if (arr[i] > 0){
        productOfPositiveElements *= arr[i]
    }

}


for (let i = 1 ; i < arr.length ; i++){
    if (arr[i] > maxDigit){
        maxDigit = arr[i]
    }
}

for (let i = 0 ; i < arr.length ; i ++){
    if (arr[i] !== maxDigit){
        arr[i] = 0 ;
    }
}


console.log(`Сумма положительных элементов ${sum} Количество положительных элементов ${quantity}`) ;
console.log(`Минимальный элемент массива ${minValue} его порядковый номер ${positionMin}` );
console.log(`Максимальный элемент массива ${maxValue} его порядковый номер ${positionMax}` );
console.log(`Количество отрицательных элементов  ${numberOfNegative}`);
console.log(`Количество нечетных положительных элементов ${oddPositiveElements}` );
console.log(`Количество четных положительных элементов ${evenPositiveElements}` );
console.log(`Сумма четных положительных элементов ${sumEvenPositiveElements}`);
console.log(`Сумма нечетных положительных элементов ${sumOfOddPositiveElements}`);
console.log(`Произведение положительных элементов ${productOfPositiveElements}`);
console.log(arr);




