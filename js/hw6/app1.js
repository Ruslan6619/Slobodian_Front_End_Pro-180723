let string = '';
let start = 10;
let end = 20;



for (; start <= end ; start++ ){
    if (start < end) {
        string += `${start}, `;
    }else {
        string += `${start}. `;
    }
}
console.log(string)

