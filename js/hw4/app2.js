let kilometers = parseInt(prompt('Введите расстояние в километрах'));
let ft = parseInt(prompt('Введите расстояние в футах'));
let meters = kilometers * 1000 ;
let ftToMeters = ft * 0.305 ;

if (meters > ftToMeters){
    console.log(`${meters} Первое расстояние больше второго ${ftToMeters}`)
}else if (ftToMeters > meters){
    console.log(`${ftToMeters} Второе расстояние больше первого ${meters}`)
}else if (ftToMeters === meters){
    console.log('Числа равны')
}else {
    alert('Упс,,, Вы не ввели число. Попробуйте снова.')
}




