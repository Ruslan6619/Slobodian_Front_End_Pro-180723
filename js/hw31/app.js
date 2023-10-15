document.getElementById('calculateButton').addEventListener('click', calculateHamburger);

function calculateHamburger() {
    const size = document.getElementById('size').value;
    const selectedStuffing = [];

    document.querySelectorAll('.stuffing:checked').forEach(checkbox => {
        selectedStuffing.push(checkbox.value);
    });

    const mayo = document.getElementById('mayo').checked;
    const sauce = document.getElementById('sauce').checked;

    const hamburger = new Hamburger(size, selectedStuffing);

    if (mayo) {
        hamburger.addTopping(Hamburger.TOPPING_MAYO);
    }

    if (sauce) {
        hamburger.addTopping(Hamburger.TOPPING_SAUCE);
    }

    const price = hamburger.calculatePrice();
    const calories = hamburger.calculateCalories();

    const output = `Цена: ${price} тугриков, Калории: ${calories} калорий.`;

    document.getElementById('output').innerText = output;
}
