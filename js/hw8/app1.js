let arr = [];
let digit = prompt('Введите длину массива');

for (let i = 0; i < digit ; i++){
    let element = prompt(`Введите элемент массива №${i + 1}`);
    arr.push(element);
}
console.log(arr);
console.log("Массив после сортировки:", arr.sort());
arr.splice(1,3);
console.log("Массив после удаления элементов с 2 по 4 (включительно):", arr);


