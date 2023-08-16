function deleteSymbol (inputString , deleteToSymbol){

    let result = '';

    for (let i = 0 ; i < inputString.length; i++){
        let symbol = inputString[i];
        if (deleteToSymbol.indexOf( symbol ) === -1 ){
            result += symbol
        }
    }
    return result ;
}

let enteredText = prompt('Введите тект');
let deleteLetters = prompt('Введите буквы которые хотите удалить');
let resultFunction = deleteSymbol(enteredText, deleteLetters);

console.log(`Вы ввели ${enteredText}`)
console.log(`Результат : ${resultFunction}`);