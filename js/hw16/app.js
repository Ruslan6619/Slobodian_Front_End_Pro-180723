'use strict'

function cachedFunction(fn) {
    let cache = [];

    return function (...args) {
        let cacheKey = JSON.stringify(args);
        let resultCache = cache.find(entry => entry.key === cacheKey);
        if (resultCache) {
            return resultCache.result
        }
        let result = fn(...args);
        cache.push({key: cacheKey, result});
        if (cache.length > 10) {
            cache.shift();
            console.log("Кэш после удаления первой записи:", cache);
        }
        return result;

    }
}

function add(a, b) {
    console.log(` ${a} + ${b}`);
    return a + b;
}

let cachedAdd = cachedFunction(add);


console.log(cachedAdd(3, 5));
console.log(cachedAdd(3, 7));
console.log(cachedAdd(10, 20));
console.log(cachedAdd(15, 25));
console.log(cachedAdd(3, 6));
console.log(cachedAdd(17, 18));
console.log(cachedAdd(19, 20));
console.log(cachedAdd(21, 28));
console.log(cachedAdd(21, 25));
console.log(cachedAdd(21, 20));
console.log(cachedAdd(21, 23));