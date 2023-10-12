function Person (name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.displayInfo = function (){
    return `Имя: ${this.name}, <br> Возраст: ${this.age}`;
}
