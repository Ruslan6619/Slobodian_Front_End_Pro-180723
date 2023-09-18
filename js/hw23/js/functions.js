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
            click: () => handleEditUser(user.id)
        }
    );

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
    );

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
    );

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
    };

    const isValid = validate(user);

    if (!isValid) {
        for (const field in user) {
            if (!user[field]) {
                formElements[field].style.borderColor = 'red';
            } else {
                formElements[field].style.borderColor = '';
            }
        }
    } else {
        const maxId = users.reduce((max, user) => (user.id > max ? user.id : max), -1);

        user.id = maxId + 1;

        users.push(user);

        updateStorage();
        showUserRow(user);
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

function handleDeleteUser(event) {
    const userId = event.target.parentNode.getAttribute('data-id');
    const userToDelete = users.find(user => user.id === +userId);

    if (userToDelete) {
        const customConfirm = document.getElementById('custom-confirm');
        const confirmYesButton = document.getElementById('confirm-yes');
        const confirmNoButton = document.getElementById('confirm-no');

        customConfirm.style.display = 'block';

        confirmYesButton.addEventListener('click', () => {
            customConfirm.style.display = 'none';
            deleteUserById(+userId);
        });

        confirmNoButton.addEventListener('click', () => {
            customConfirm.style.display = 'none';
        });
    }
}

let currentId = 0;

function deleteUserById(id) {
    const indexToRemove = users.findIndex(user => user.id === id);
    if (indexToRemove !== -1) {
        users.splice(indexToRemove, 1);
        removeElement(`div[data-user-id="${id}"]`);
        updateStorage();

        currentId = users.length > 0 ? users[users.length - 1].id : 0;

        localStorage.setItem('currentId', currentId.toString());
    }
}


function updateStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}


function handleEditUser(userId) {
    const userToEdit = users.find(user => user.id === userId);

    if (userToEdit) {
        cleanElement('#form form');

        showAddUserForm();

        document.querySelector('input[name="login"]').value = userToEdit.login;
        document.querySelector('input[name="name"]').value = userToEdit.name;
        document.querySelector('input[name="lastName"]').value = userToEdit.lastName;
        document.querySelector('input[name="email"]').value = userToEdit.email;

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
    const login = document.querySelector('input[name="login"]').value;
    const name = document.querySelector('input[name="name"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const email = document.querySelector('input[name="email"]').value;

    userToEdit.login = login;
    userToEdit.name = name;
    userToEdit.lastName = lastName;
    userToEdit.email = email;

    updateStorage();
    cleanElement('#form form');
    refreshUserList();

}


function refreshUserList() {
    const usersContainer = document.querySelector('#users');
    cleanElement(usersContainer);
    showRows(users);
}


function handleViewUser(user) {
    cleanElement('#form form');

    showAddUserForm();

    const loginInput = document.querySelector('input[name="login"]');
    const nameInput = document.querySelector('input[name="name"]');
    const lastNameInput = document.querySelector('input[name="lastName"]');
    const emailInput = document.querySelector('input[name="email"]');

    loginInput.value = user.login;
    nameInput.value = user.name;
    lastNameInput.value = user.lastName;
    emailInput.value = user.email;

    loginInput.setAttribute('disabled', 'disabled');
    nameInput.setAttribute('disabled', 'disabled');
    lastNameInput.setAttribute('disabled', 'disabled');
    emailInput.setAttribute('disabled', 'disabled');


    const saveButton = document.querySelector('input[value="Save"]');
    if (saveButton) {
        saveButton.remove();
    }
    const saveChangesButton = document.querySelector('input[value="Save Changes"]');
    if (saveChangesButton) {
        saveChangesButton.remove();
    }
}
