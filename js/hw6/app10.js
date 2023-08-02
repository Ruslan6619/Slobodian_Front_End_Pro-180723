let string = '';

for (let i = 1 ; i < 11 ; i++){

    for (let j = 1 ; j < 11 ; j++){
        string += (j * i)

        console.log(`${i} x ${j} = ${string}`);
        string = '';
    }
}

