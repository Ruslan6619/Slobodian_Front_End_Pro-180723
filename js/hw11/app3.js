function userData() {
    let arr = [];
    let amount = +prompt('Введите количество массивов в первом массиве');

    for (let i = 0 ; i < amount ; i++){
        arr.push([]);

        let internalArray = +prompt(`Введите количество елементов в ${i + 1} массиве`);

        for (let j = 0 ; j < internalArray ; j++){
            let text = prompt(`Введите текст ${j + 1}`);
            arr[i].push(text);
        }
    }
    console.log("Заполненный двумерный массив:", arr);
}

userData();


