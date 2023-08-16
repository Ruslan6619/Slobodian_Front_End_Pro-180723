function removeElement(array, item) {
    let index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
removeElement(arr, 3);
console.log(arr);
