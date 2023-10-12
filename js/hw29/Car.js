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