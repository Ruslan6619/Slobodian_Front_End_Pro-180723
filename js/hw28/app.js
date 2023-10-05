const charactersList = document.getElementById('characters-list');
const loadCharactersButton = document.getElementById('loadCharactersButton');

const vehiclesList = document.getElementById('vehicles-list');
const loadVehiclesButton = document.getElementById('loadVehiclesButton');

const planetsList = document.getElementById('planets-list');
const loadPlanetsButton = document.getElementById('loadPlanetsButton');

let currentPageCharacters = 1;
let currentPageVehicles = 1;
let currentPagePlanets = 1;


function loadCharacters() {
    fetch(`https://swapi.dev/api/people/?page=${currentPageCharacters}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                const character = data.results[i];
                const listItem = document.createElement('li');
                listItem.textContent = character.name;
                listItem.addEventListener('click', function () {
                    showCharacterDetails(character.url);
                });
                charactersList.appendChild(listItem);
            }
            charactersList.removeAttribute('disabled');
            addPaginationButton(data.next, 'characters', loadCharacters);
        })
        .catch(error => {
            console.error(`Ошибка при загрузке персонажей: ${error}`);
        });
}

loadCharactersButton.addEventListener('click', loadCharacters);


function showCharacterDetails(characterUrl) {
    fetch(characterUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (character) {
            displayDetailsModal(character.name, `
                <h3>${character.name}</h3>
                <p>День Рождения: ${character.birth_year}</p>
                <p>Рост: ${character.height}</p>
                <p>Вес: ${character.mass}</p>
                <p>Цвет глаз: ${character.eye_color}</p>
                <p>Цвет волос: ${character.hair_color}</p>
            `);
        })
}

function loadVehicles() {
    fetch(`https://swapi.dev/api/vehicles/?page=${currentPageVehicles}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                const vehicle = data.results[i];
                const listItem = document.createElement('li');
                listItem.textContent = vehicle.name;
                listItem.addEventListener('click', function () {
                    showVehicleDetails(vehicle.url);
                });
                vehiclesList.appendChild(listItem);
            }
            vehiclesList.removeAttribute('disabled');
            addPaginationButton(data.next, 'vehicles', loadVehicles);
        })
        .catch(error => {
            console.error(`Ошибка при загрузке транспорта: ${error}`);
        });
}

function showVehicleDetails(vehicleUrl) {
    fetch(vehicleUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (vehicle) {
            displayDetailsModal(vehicle.name, `
                <h3>${vehicle.name}</h3>
                <p>Модель: ${vehicle.model}</p>
                <p>Производитель: ${vehicle.manufacturer}</p>
                <p>Стоимость: ${vehicle.cost_in_credits}</p>
            `);
        })
}

function loadPlanets() {
    fetch(`https://swapi.dev/api/planets/?page=${currentPagePlanets}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                const planet = data.results[i];
                const listItem = document.createElement('li');
                listItem.textContent = planet.name;
                listItem.addEventListener('click', function () {
                    showPlanetDetails(planet.url);
                });
                planetsList.appendChild(listItem);
            }
            planetsList.removeAttribute('disabled');
            addPaginationButton(data.next, 'planets', loadPlanets);
        })
        .catch(error => {
            console.error(`Ошибка при загрузке планет: ${error}`);
        });
}


function showPlanetDetails(planetUrl) {
    fetch(planetUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (planet) {
            displayDetailsModal(planet.name, `
                <h3>${planet.name}</h3>
                <p>Диаметр: ${planet.diameter}</p>
                <p>Период обращения: ${planet.orbital_period}</p>
                <p>Гравитация: ${planet.gravity}</p>
            `);
        })
}

function displayDetailsModal(title, content) {
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = content;

    const modal = new bootstrap.Modal(document.getElementById('detailsModal'));
    modal.show();
}

function addPaginationButton(nextPageUrl, entity, loadDataFunction) {
    const list = document.getElementById(`${entity}-list`);
    const paginationButton = document.createElement('button');
    paginationButton.textContent = 'Далее';
    paginationButton.addEventListener('click', () => {
        if (entity === 'characters') {
            currentPageCharacters++;
        } else if (entity === 'vehicles') {
            currentPageVehicles++;
        } else if (entity === 'planets') {
            currentPagePlanets++;
        }
        loadDataFunction();
    });

    const existingButton = document.getElementById(`${entity}-paginationButton`);
    if (existingButton) {
        existingButton.remove();
    }

    if (nextPageUrl) {
        paginationButton.id = `${entity}-paginationButton`;
        list.appendChild(paginationButton);
    }
}

loadCharactersButton.addEventListener('click', loadCharacters);
loadVehiclesButton.addEventListener('click', loadVehicles);
loadPlanetsButton.addEventListener('click', loadPlanets);