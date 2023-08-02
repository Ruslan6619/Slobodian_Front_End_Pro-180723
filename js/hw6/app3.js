let digit1 = 10 ;
let digit2 = 1 ;
let string = '';
let seven = 7 ;

for (let i = digit2 ; i <= digit1 ; i++){
    digit2 = seven * i ;

    if (i < digit1){
        string += `${digit2}, `;
    }else{
        string += `${digit2}.`;
    }
}
console.log(string);

