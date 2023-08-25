"use strict"

document.getElementById('btn').addEventListener('click', function (event){
    function generateList(array){
        let ul = document.createElement('ul');

        for (let i = 0; i < array.length; i++){
            let li = document.createElement('li');
            if (Array.isArray(array[i])){
                let nestedList = generateList(array[i]);
                li.appendChild(nestedList);
            }else {
                li.textContent = array[i];
            }
            ul.appendChild(li);
        }
        return ul;
    }
    let inputArray = [1,2, [1.1,1.2,1.3], 3];
    let result = generateList(inputArray);
    const wrapper = document.getElementById('wrapper');
    wrapper.appendChild(result);

});
