let currentHouses = [];

document.getElementById('displayButton').addEventListener('click', displayHouseData);
document.getElementById('createHouse').addEventListener('click', createHouses)

function displayHouseData() {
    const numHouses = document.getElementById('numHouses').value;

    currentHouses = [];

    for (let h = 0; h < numHouses; h++) {
        const house = new House();
        const numApartments = document.getElementById(`numApartments${h + 1}`).value;

        if (!numApartments) {
            showErrorMessage("Пожалуйста, введите количество квартир.");
            return;
        }

        for (let i = 0; i < numApartments; i++) {
            const apartment = new Apartment();
            const numResidents = document.getElementById(`numResidents${h + 1}apt${i + 1}`).value;

            if (!numResidents) {
                showErrorMessage("Пожалуйста, введите количество жильцов.");
                return;
            }

            for (let j = 0; j < numResidents; j++) {
                const residentName = document.getElementById(`resident${h + 1}apt${i + 1}res${j + 1}`).value;

                if (residentName.trim() === "") {
                    showErrorMessage("Пожалуйста, введите имя жителя.");
                    return;
                }

                const resident = new Person(residentName);
                apartment.addResident(resident);
            }

            house.addApartment(apartment);
        }

        currentHouses.push(house);
    }

    createResidentForms();
}

function createHouses() {
    const numHouses = document.getElementById('numHouses').value;

    if (!numHouses) {
        showErrorMessage("Пожалуйста, введите количество домов.");
        return;
    }

    const apartmentForm = document.getElementById('apartmentForm');
    apartmentForm.innerHTML = "";

    for (let h = 0; h < numHouses; h++) {
        const numApartmentsInput = document.createElement('input');
        numApartmentsInput.type = 'number';
        numApartmentsInput.placeholder = `Количество квартир в доме ${h + 1}`;
        numApartmentsInput.id = `numApartments${h + 1}`;
        apartmentForm.appendChild(numApartmentsInput);

        const apartmentDiv = document.createElement('div');
        apartmentForm.appendChild(apartmentDiv);

        numApartmentsInput.addEventListener('input', function () {
            const numApartments = numApartmentsInput.value;

            if (!numApartments) {
                showErrorMessage("Пожалуйста, введите количество квартир.");
                return;
            }

            apartmentDiv.innerHTML = "";

            for (let i = 0; i < numApartments; i++) {
                const numResidentsInput = document.createElement('input');
                numResidentsInput.type = 'number';
                numResidentsInput.placeholder = `Количество жильцов в квартире ${i + 1}`;
                numResidentsInput.id = `numResidents${h + 1}apt${i + 1}`;
                apartmentDiv.appendChild(numResidentsInput);

                numResidentsInput.addEventListener('input', function () {
                    const numResidents = numResidentsInput.value;

                    if (!numResidents) {
                        showErrorMessage("Пожалуйста, введите количество жильцов.");
                        return;
                    }

                    for (let j = 0; j < numResidents; j++) {
                        const residentNameInput = document.createElement('input');
                        residentNameInput.type = 'text';
                        residentNameInput.placeholder = `Имя жителя ${j + 1}`;
                        residentNameInput.id = `resident${h + 1}apt${i + 1}res${j + 1}`;
                        apartmentDiv.appendChild(residentNameInput);
                    }
                });
            }
        });
    }

    document.getElementById('houseData').style.display = 'block';
    showResidentForm();
}


function showResidentForm() {
    const residentForm = document.getElementById('residentForm');
    residentForm.innerHTML = "";

    const existingButton = document.getElementById('displayButton');
    if (!existingButton) {
        const addButton = document.createElement('button');
        addButton.type = 'button';
        addButton.textContent = 'Вывести данные о доме';
        addButton.id = 'displayButton';
        addButton.onclick = function () {
            displayHouseData();
        };

        residentForm.appendChild(addButton);
    }
}


function createResidentForms() {
    const residentForm = document.getElementById('residentForm');
    residentForm.innerHTML = "";

    for (let h = 0; h < currentHouses.length; h++) {
        for (let i = 0; i < currentHouses[h].apartments.length; i++) {
            for (let j = 0; j < currentHouses[h].apartments[i].residents.length; j++) {
                const resident = currentHouses[h].apartments[i].residents[j];
                residentForm.innerHTML += `<p>Дом ${h + 1}, квартира ${i + 1}, житель ${j + 1}: ${resident.name}</p>`;
            }
        }
    }
}

function showErrorMessage(message) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    document.body.appendChild(errorMessage);
    setTimeout(() => {
        errorMessage.remove();
    }, 3000);
}
