
const myModal = document.getElementById('staticBackdrop')

myModal.addEventListener('shown.bs.modal', () => {

})





const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))







const myAlert = document.getElementById('myAlert');
const showAlertBtn = document.getElementById('showAlertBtn');

showAlertBtn.addEventListener('click', function() {
    myAlert.classList.toggle('d-none');
});






document.addEventListener('DOMContentLoaded', function (){
    const birthdayDate = moment('1994-03-29');
    const formattedDate = birthdayDate.format('MMMM Do, YYYY');
    const birthdayDateElement = document.getElementById('birthdayDate');

    birthdayDateElement.textContent = `Моя дата рождения: ${formattedDate}`
})







document.addEventListener('DOMContentLoaded', function () {
    const birthdateInput = document.getElementById('birthdateInput');
    const convertButton = document.getElementById('convertButton');
    const errorAlert = document.getElementById('error');
    const resultAlert = document.getElementById('result');

    convertButton.addEventListener('click', function () {
        const inputDate = birthdateInput.value.trim();
        const dateFormat = /^\d{2}\.\d{2}\.\d{4}$/;

        if (!dateFormat.test(inputDate)) {
            errorAlert.textContent = 'Некорректный формат даты (DD.MM.YYYY)';
            errorAlert.classList.remove('d-none');
            resultAlert.classList.add('d-none');
        } else {
            const momentDate = moment(inputDate, 'DD.MM.YYYY');
            const currentYear = moment().year();
            const currentMonth = moment().month() + 1;
            const currentDay = moment().date();

            if (momentDate.year() > currentYear) {
                errorAlert.textContent = 'Год не может быть больше текущего';
                errorAlert.classList.remove('d-none');
                resultAlert.classList.add('d-none');
            } else if (momentDate.year() === currentYear && momentDate.month() + 1 > currentMonth) {
                errorAlert.textContent = 'Месяц не может быть больше текущего';
                errorAlert.classList.remove('d-none');
                resultAlert.classList.add('d-none');
            } else if (momentDate.year() === currentYear && momentDate.month() + 1 === currentMonth && momentDate.date() > currentDay) {
                errorAlert.textContent = 'День не может быть больше текущего';
                errorAlert.classList.remove('d-none');
                resultAlert.classList.add('d-none');
            } else {
                errorAlert.classList.add('d-none');
                resultAlert.classList.remove('d-none');

                const formattedDate = momentDate.format('MMMM DD, YYYY');
                resultAlert.textContent = `Дата рождения: ${formattedDate}`;
            }
        }
    });
});
