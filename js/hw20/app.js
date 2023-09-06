function table(){
const form = document.forms.mainForm;
const userDiv = document.getElementById('userData');
const userList = document.getElementById("userList");
const formData = new FormData(form);

for (let [fieldName, fieldValue] of formData){
    const listItem = document.createElement('li');
    listItem.innerHTML = `${fieldName}:  ${fieldValue}`;
    userList.appendChild(listItem);
}
userDiv.style.display = 'block';
form.style.display = 'none';
}

document.getElementById('save').addEventListener('click', function (){
    table();
});



