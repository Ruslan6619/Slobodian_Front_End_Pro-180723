class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    static SIZE_SMALL = 'small';
    static STUFFING_CHEESE = 'cheese';
    static STUFFING_SALAD = 'salad';
    static STUFFING_POTATO = 'potato';
    static TOPPING_MAYO = 'mayo';
    static TOPPING_SAUCE = 'sauce';

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let price = 0;

        if (this.size === Hamburger.SIZE_SMALL) {
            price += 50;
        } else {
            price += 100;
        }

        this.stuffing.forEach(option => {
            if (option === Hamburger.STUFFING_CHEESE) {
                price += 10;
            } else if (option === Hamburger.STUFFING_SALAD) {
                price += 20;
            } else if (option === Hamburger.STUFFING_POTATO) {
                price += 15;
            }
        });

        this.toppings.forEach(topping => {
            if (topping === Hamburger.TOPPING_MAYO) {
                price += 20;
            } else if (topping === Hamburger.TOPPING_SAUCE) {
                price += 15;
            }
        });

        return price;
    }

    calculateCalories() {
        let calories = 0;

        if (this.size === Hamburger.SIZE_SMALL) {
            calories += 20;
        } else {
            calories += 40;
        }

        this.stuffing.forEach(option => {
            if (option === Hamburger.STUFFING_CHEESE) {
                calories += 20;
            } else if (option === Hamburger.STUFFING_SALAD) {
                calories += 5;
            } else if (option === Hamburger.STUFFING_POTATO) {
                calories += 10;
            }
        });

        this.toppings.forEach(topping => {
            if (topping === Hamburger.TOPPING_MAYO || topping === Hamburger.TOPPING_SAUCE) {
                calories += 5;
            }
        });

        return calories;
    }
}
