document.getElementById('createPersonBtn').addEventListener('click', createPerson);
document.getElementById('createCarBtn').addEventListener('click', createCar);
document.getElementById('assignCarBtn').addEventListener('click', assignCar);

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

        document.getElementById('personForm').reset();

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
