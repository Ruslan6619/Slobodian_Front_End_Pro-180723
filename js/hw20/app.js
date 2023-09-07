function showTable() {
    const form = document.forms.mainForm;
    const userDiv = document.getElementById('userData');
    const userList = document.getElementById("userList");
    const formData = new FormData(form);
    let selectedLanguages = [];

    for (let [fieldName, fieldValue] of formData) {
        if (fieldName !== 'languages') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${fieldName}:  ${fieldValue}`;
            userList.appendChild(listItem);
        }
    }

    const languageCheckboxes = document.querySelectorAll('[name = "languages"]');

    for (let i = 0; i < languageCheckboxes.length; i++) {
        if (languageCheckboxes[i].checked) {
            selectedLanguages.push(languageCheckboxes[i].value)
        }
    }

    const languagesItem = document.createElement('li');

    if (selectedLanguages.length === 1) {
        languagesItem.innerHTML = `Languages : ${selectedLanguages[0]}`
    } else if (selectedLanguages.length > 1) {
        languagesItem.innerHTML = `Languages : ${selectedLanguages.join(', ')}`
    }else {
        languagesItem.innerHTML = `Languages:`
    }

    userList.appendChild(languagesItem);

    userDiv.style.display = 'block';
    form.style.display = 'none';
}

document.getElementById('save').addEventListener('click', function () {
    showTable();
});
