function createFunction() {
    let digit = 0;

    function innerFunction(num){
        digit += num;
        return digit;
    }
    return innerFunction;
}

let sum = createFunction();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
console.log(sum(30));

