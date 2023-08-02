let string = '';
let ten = 10 ;

for (let i = 1 ; i < 11 ; i++){

    for (let j = 1 ; j < 11 ; j++){
        if (j < ten){
            string += `${j * i}, `;
        }else {
            string += `${j * i}. `;
        }
    }

    console.log(i + " x");
    console.log(string);
    string = '';
}
