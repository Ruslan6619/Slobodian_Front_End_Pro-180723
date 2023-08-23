'use strict'

//1

let inputField = document.getElementById('inputField');
let infoBox = document.getElementById('infoBox');

inputField.addEventListener('focus', function () {
    infoBox.classList.remove('hidden');
});

inputField.addEventListener('blur', function () {
    infoBox.classList.add('hidden');
});


//2

let buttonPromt = document.getElementById('buttonPromt');
let redirectButton = document.getElementById('redirectButton');
let link

buttonPromt.addEventListener('click', function () {
    link = prompt('Введите ссылку');
    redirectButton.classList.remove('hidden');
    if (!link) {
        alert('Вы ничего не ввели');
        redirectButton.classList.add('hidden');
    }

})

redirectButton.addEventListener('click', function () {

    if (link.indexOf('http://') === 0 || link.indexOf('https://') === 0) {
        location.href = link
    } else {
        link = 'http://' + link;
        location.href = link
    }
})


//3


let table = document.getElementById('numberTable');

for (let i = 1; i <= 10; i++) {
    let row = document.createElement('tr');

    for (let j = 1; j <= 10; j++) {
        let cell = document.createElement('td');
        let digit = (i - 1) * 10 + j;
        cell.textContent = digit;
        row.appendChild(cell);
    }
    table.appendChild(row);
}


//4


let randomImage = document.getElementById('randomImage');
let imageCount = 10;
let random = Math.floor(Math.random() * imageCount) + 1;
randomImage.src = `images/${random}.jpg`;


