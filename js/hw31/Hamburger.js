class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    static SIZE_SMALL = 'small';
    static SIZE_LARGE = 'large';
    static STUFFING_CHEESE = 'cheese';
    static STUFFING_SALAD = 'salad';
    static STUFFING_POTATO = 'potato';
    static TOPPING_MAYO = 'mayo';
    static TOPPING_SAUCE = 'sauce';

    static TOPPING_PRICES = {
        [Hamburger.TOPPING_MAYO]: 20,
        [Hamburger.TOPPING_SAUCE]: 15,
    };

    static STUFFING_PRICES = {
        [Hamburger.STUFFING_CHEESE]: 10,
        [Hamburger.STUFFING_SALAD]: 20,
        [Hamburger.STUFFING_POTATO]: 15,
    };

    static SIZE_PRICES = {
        [Hamburger.SIZE_SMALL]: 50,
        [Hamburger.SIZE_LARGE]: 100,
    };

    static TOPPING_CALORIES = {
        [Hamburger.TOPPING_MAYO]: 5,
        [Hamburger.TOPPING_SAUCE]: 5,
    };

    static STUFFING_CALORIES = {
        [Hamburger.STUFFING_CHEESE]: 20,
        [Hamburger.STUFFING_SALAD]: 5,
        [Hamburger.STUFFING_POTATO]: 10,
    };

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let price = Hamburger.SIZE_PRICES[this.size] || 0;

        this.stuffing.forEach(option => {
            price += Hamburger.STUFFING_PRICES[option] || 0;
        });

        this.toppings.forEach(topping => {
            price += Hamburger.TOPPING_PRICES[topping] || 0;
        });

        return price;
    }

    calculateCalories() {
        let calories = this.size === Hamburger.SIZE_SMALL ? 20 : 40;

        this.stuffing.forEach(option => {
            calories += Hamburger.STUFFING_CALORIES[option] || 0;
        });

        this.toppings.forEach(topping => {
            calories += Hamburger.TOPPING_CALORIES[topping] || 0;
        });

        return calories;
    }
}
