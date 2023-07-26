let years = parseInt(prompt('Год вашего рождения'));
let city = prompt('В каком городе Вы живете');
let sport = prompt('Какой Ваш любимый вид спорта');
let kiev = 'Kiev';
let london = 'London';
let washington = 'Washington';
let age = 2023 - years;
let sportFootball = 'football';
let sportBasketball = 'basketball';
let sportBoxing = 'box';




if (years){
    console.log(`Вам ${age} лет`);
}else {
    console.log(`Жаль, что Вы не захотели ввести свою дату рождения`)
}

if (city === kiev ){
    console.log('Ты живешь в столице Украины');
}else if (city === london){
    console.log('Ты живешь в столице Англии');
}else if (city === washington) {
    console.log('Ты живешь в столице Америки');
}else if (city){
    console.log(`ты живешь в городе ${city}`);
}else {
    console.log('Жаль, что Вы не захотели ввести свой город')
}


if (sport === sportFootball){
    console.log('Круто! Хочешь стать как Cristiano Ronaldo');
}else if (sport === sportBasketball){
    console.log('Круто! Хочешь стать как Mikel Jordan');
}else if (sport === sportBoxing){
    console.log('Круто! Хочешь стать как Mike Tyson');
}else if (sport){
    console.log(`Круто! Ты любишь ${sport}`);
}else {
    console.log('Жаль, что Вы не захотели ввести свой любимый спорт')
}

