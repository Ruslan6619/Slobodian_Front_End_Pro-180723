let string = '';
let start = 10;
let end = 20;

for (let i = start ; i <= end ; i++ ){
    start = i*i;

    if (i < end) {
        string += `${start}, `;
    }else{
        string += `${start}.`;
    }

}
console.log(string);

