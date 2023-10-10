function Person (name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.displayInfo = function (){
    return `Имя: ${this.name}, <br> Возраст: ${this.age}`;
}

function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.owner = null;
}

Car.prototype.displayInfo = function (){
    if (this.owner){
        return `Марка: ${this.brand}, <br> Модель: ${this.model}, <br> Год выпуска: ${this.year}, <br> Владелец, ${this.owner.displayInfo()}`;
    }else {
        return `Марка: ${this.brand},<br> Модель: ${this.model},<br> Год выпуска: ${this.year},`;
    }
}

Car.prototype.setOwner = function (owner){
    this.owner = owner;
}

let currentPerson = null;
let currentCar = null;


function createPerson(){
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value

    if (name && age && parseInt(age) > 18){
        currentPerson = new Person(name, age);
        displayOutputPerson(currentPerson.displayInfo());
    }else {
        displayOutputPerson('Введите корректные данные о человеке.');
    }
}

function createCar(){
    const brand = document.getElementById('brand').value;
     const model = document.getElementById('model').value;
     const year = document.getElementById('year').value;

     if (brand && model && year){
         currentCar = new Car(brand, model, year);
         displayOutputCar(currentCar.displayInfo());
     }else {
         displayOutputCar('Введите корректные данные об автомобиле.');
     }
}


function assignCar() {
    if (currentPerson && currentCar) {
        currentCar.setOwner(currentPerson);
        displayOutputCar(currentCar.displayInfo());

        // Очистить форму человека
        document.getElementById('personForm').reset();

        // Очистить форму автомобиля
        document.getElementById('carForm').reset();
    } else {
        displayOutputCar('Человека и автомобиль нужно создать перед присвоением.');
    }
}


function displayOutputPerson(data){
    document.getElementById('outputPerson').innerHTML = data
}

function displayOutputCar(data){
    document.getElementById('outputCar').innerHTML = data
}


