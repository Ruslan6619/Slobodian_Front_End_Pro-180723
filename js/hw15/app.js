function  generateKey(length, characters){
    let result = '';
    let charactersLongitude = characters.length;

    for (let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * charactersLongitude);
        result += characters.charAt(randomIndex);
    }
    return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);