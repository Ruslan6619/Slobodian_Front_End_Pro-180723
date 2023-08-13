function deleteSymbol (InputString , deleteToSymbol){

    let result = '';

    for (let i = 0 ; i < InputString.length; i++){
        let symbol = InputString[i];
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