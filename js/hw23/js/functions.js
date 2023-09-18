function showRows(users) {
    for (let user of users) {
        showUserRow(user);
    }
}

function showUserRow(user) {
    const container = createElement('div', '#users', '', {'data-user-id': user.id}); // container

    createElement('div', container, user.id); // idElement

    createElement('div', container, user.name + ' ' + user.lastName); // nameElement

    const actionsElement = createElement('div', container, '', {className: 'actions', 'data-id': user.id});

    createElement(
        'input',
        actionsElement,
        '',
        {type: 'button', value: 'Edit', 'data-type': 'edit'},
        {
            click: () => handleEditUser(user.id) // Передаем идентификатор пользователя в обработчик
        }
    ); // editBtnElement

    createElement(
        'input',
        actionsElement,
        '',
        {type: 'button', value: 'Delete', 'data-type': 'delete'},
        {
            click: handleDeleteUser
        }
    );

    const viewButton = createElement(
        'input',
        actionsElement,
        '',
        {type: 'button', value: 'View', 'data-type': 'view'}
    ); // viewBtnElement

    viewButton.addEventListener('click', () => handleViewUser(user));
}

function showAddUserForm() {
    const parentSelector = '#form form';

    createElement(
        'input',
        parentSelector,
        '',
        {
            name: 'login',
            type: 'text',
            placeholder: 'Enter login'
        }
    ); // login input

    createElement(
        'input',
        parentSelector,
        '',
        {
            name: 'name',
            type: 'text',
            placeholder: 'Enter name'
        }
    ); // name input

    createElement(
        'input',
        parentSelector,
        '',
        {
            name: 'lastName',
            type: 'text',
            placeholder: 'Enter last name'
        }
    ); // lastName input

    createElement(
        'input',
        parentSelector,
        '',
        {
            name: 'email',
            type: 'text',
            placeholder: 'Enter email'
        }
    ); // email input

    createElement(
        'input',
        parentSelector,
        '',
        {
            type: 'button',
            value: 'Save'
        },
        {
            click: handleSaveUser
        }
    );

}

let currentId = parseInt(localStorage.getItem('currentId')) || 3;

function handleSaveUser() {
    const formElements = document.forms[0].elements;

    const login = formElements.login.value;
    const name = formElements.name.value;
    const lastName = formElements.lastName.value;
    const email = formElements.email.value;
    const user = {
        login,
        name,
        lastName,
        email,
        id: currentId
    };
    currentId++
    // Сохраняем текущее значение счетчика id в localStorage
    localStorage.setItem('currentId', currentId);

    const isValid = validate(user);

    if (!isValid) {
// Обработка ошибок валидации
        for (const field in user) {
            if (!user[field]) {
                // Если поле пустое, установите красный цвет границы (или другой стиль)
                formElements[field].style.borderColor = 'red';
            } else {
                // Сбросьте стиль, если поле заполнено
                formElements[field].style.borderColor = '';
            }
        }
    } else {

        saveUser(user);
        cleanElement('#form form');
    }
}


function validate(user) {

    if (user.login === '') {
        return false;
    }
    if (user.name === '') {
        return false;
    }
    if (user.lastName === '') {
        return false;
    }
    if (user.email === '') {
        return false;
    }

    return true;
}


function saveUser(newUser) {
    users.push(newUser);
    updateStorage();
    showUserRow(newUser);
}


function handleDeleteUser(event) {
    const userId = event.target.parentNode.getAttribute('data-id');
    const userToDelete = users.find(user => user.id === +userId);

    if (userToDelete) {
        const confirmation = confirm(`Вы уверены, что хотите удалить пользователя ${userToDelete.name} ${userToDelete.lastName}?`);

        if (confirmation) {
            deleteUserById(+userId);

        }
    }
}


function deleteUserById(id) {
    const indexToRemove = users.findIndex(user => user.id === id);
    users.splice(indexToRemove, 1);
    removeElement(`div[data-user-id="${id}"]`);
    updateStorage();

    // Проверяем, является ли удаляемый пользователь последним
    const isLastUser = id === currentId - 1;
    if (isLastUser) {
        // Уменьшаем currentId на 1
        currentId--;

        // Сохраняем обновленное значение currentId
        localStorage.setItem('currentId', currentId.toString());
    }

}

function updateStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}


function handleEditUser(userId) {
    const userToEdit = users.find(user => user.id === userId);

    if (userToEdit) {
        // Очищаем форму редактирования
        cleanElement('#form form');

        // Создаем поля для редактирования
        showAddUserForm();

        // Заполняем поля формы данными пользователя
        document.querySelector('input[name="login"]').value = userToEdit.login;
        document.querySelector('input[name="name"]').value = userToEdit.name;
        document.querySelector('input[name="lastName"]').value = userToEdit.lastName;
        document.querySelector('input[name="email"]').value = userToEdit.email;

        // Создаем кнопку для сохранения изменений
        createElement(
            'input',
            '#form form',
            '',
            {
                type: 'button',
                value: 'Save Changes'
            },
            {
                click: () => handleSaveEditedUser(userToEdit)
            }
        );
        const saveButton = document.querySelector('input[value="Save"]');
        if (saveButton) {
            saveButton.remove();
        }
    }
}

function handleSaveEditedUser(userToEdit) {
    // Получаем значения из формы
    const login = document.querySelector('input[name="login"]').value;
    const name = document.querySelector('input[name="name"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const email = document.querySelector('input[name="email"]').value;

    // Обновляем данные пользователя
    userToEdit.login = login;
    userToEdit.name = name;
    userToEdit.lastName = lastName;
    userToEdit.email = email;

    // Сохраняем отредактированные данные
    updateStorage();
    cleanElement('#form form');
    // Обновляем отображение списка пользователей
    refreshUserList();

}


function refreshUserList() {
    // Очистите и заново отобразите список пользователей
    const usersContainer = document.querySelector('#users');
    cleanElement(usersContainer);
    showRows(users);
}


function handleViewUser(user) {
    // Очищаем форму редактирования
    cleanElement('#form form');

    // Создаем поля для отображения данных пользователя
    showAddUserForm();

    const loginInput = document.querySelector('input[name="login"]');
    const nameInput = document.querySelector('input[name="name"]');
    const lastNameInput = document.querySelector('input[name="lastName"]');
    const emailInput = document.querySelector('input[name="email"]');

    loginInput.value = user.login;
    nameInput.value = user.name;
    lastNameInput.value = user.lastName;
    emailInput.value = user.email;

    // Заблокируем поля для редактирования, сделав их неактивными
    loginInput.setAttribute('disabled', 'disabled');
    nameInput.setAttribute('disabled', 'disabled');
    lastNameInput.setAttribute('disabled', 'disabled');
    emailInput.setAttribute('disabled', 'disabled');


    // Убираем кнопки "Save" и "Save Changes", если они есть в форме
    const saveButton = document.querySelector('input[value="Save"]');
    if (saveButton) {
        saveButton.remove();
    }
    const saveChangesButton = document.querySelector('input[value="Save Changes"]');
    if (saveChangesButton) {
        saveChangesButton.remove();
    }
}
