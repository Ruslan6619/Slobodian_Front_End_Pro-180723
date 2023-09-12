let selectedProduct = null;
let categoriesShown = false;
let productName = '';
let productPrice = '';
let productDescriptions = '';

function showCategories() {
    if (!categoriesShown) {

        const parentElement = document.getElementById('left');

        for (let categoryKey in categories) {
            const category = categories[categoryKey];

            let element = document.createElement('div');
            element.textContent = category.name;
            element.setAttribute('data-category', categoryKey)
            parentElement.appendChild(element);
        }
        categoriesShown = true;
    }
}

function showProducts(products, category) {
    const parentElement = document.getElementById('center');
    parentElement.innerHTML = '';

    const rightElement = document.getElementById('right');
    rightElement.innerHTML = '';

    for (let product of products) {
        let element = document.createElement('div');
        element.textContent = `${product.name} $${product.price}`;
        element.setAttribute('data-product', product.id);
        element.setAttribute('data-category', category);

        parentElement.appendChild(element);
    }
}

function productDescription(product, category, quantity) {
    const parentElement = document.getElementById('center');
    const parentElementRight = document.getElementById('right');
    const main = document.getElementById('main');
    const wrapper = document.getElementById('wrapper');
    const boxOrderForm = document.getElementById('boxOrderForm');
    productName = product.name;
    productPrice = product.price;
    productDescriptions = product.description;
    parentElementRight.innerHTML = '';


    let element = document.createElement('div');
    element.textContent = `${product.name} $${product.price} ${product.description}`;
    element.setAttribute('data-product', product.id);
    element.setAttribute('data-category', category);
    parentElementRight.appendChild(element);

    let btn = document.createElement('button');
    btn.textContent = `${'Купить'}`;
    btn.style.backgroundColor = 'aqua'

    btn.addEventListener('click', function () {
        let purchaseMessage = document.getElementById('boxOrderForm');
        const orderDetails = document.getElementById('orderDetails');
        const totalPrice = product.price * quantity; // Рассчитываем общую стоимость
        orderDetails.textContent = `Товар ${product.name} (Количество: ${quantity}) куплен за $${totalPrice}`;
        parentElement.innerHTML = '';
        parentElementRight.innerHTML = '';
        wrapper.appendChild(purchaseMessage);
        boxOrderForm.style.display = 'block'
    })
    parentElementRight.appendChild(btn);
}

showCategories();

function hideElements(boxOrderForm, orderSummary) {
    const elementOrderForm = document.getElementById(boxOrderForm);
    const elementOrderSummary = document.getElementById(orderSummary);
    if (elementOrderForm && elementOrderSummary) {
        elementOrderForm.style.display = 'none';
        elementOrderSummary.style.display = 'none';
    }
}

document.getElementById('left').addEventListener('click', event => {
    if (event.target.nodeName === 'DIV') {
        const categoryKey = event.target.getAttribute('data-category');
        const categoryProducts = categories[categoryKey].products;
        const purchaseMessage = document.querySelector('.purchasedGoods');

        hideElements('boxOrderForm', 'orderSummary');

        if (purchaseMessage) {
            purchaseMessage.remove();
        }
        showProducts(categoryProducts, categoryKey);
    }
});

document.getElementById('center').addEventListener('click', event => {
    if (event.target.nodeName === 'DIV') {
        const productId = event.target.getAttribute('data-product');
        const categoryKey = event.target.getAttribute('data-category');
        const product = categories[categoryKey].products.find(product => product.id == productId);

        selectedProduct = product;

        productDescription(product, categoryKey);
    }
});

document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName');
    const city = document.getElementById('city');
    const novaPoshta = document.getElementById('novaPoshta');
    const paymentMethod = document.querySelector('input[name="Оплата"]:checked');
    const quantity = document.getElementById('quantity');
    const comment = document.getElementById('comment');
    const form = document.getElementById('orderForm');
    const boxForm = document.getElementById('boxOrderForm');
    const orderSummary = document.getElementById('orderSummary');
    const orderDetails = document.getElementById('orderDetails');
    let hasErrors = false;

    if (fullName.value.trim() === '') {
        hasErrors = true;
    }

    if (city.value === '') {
        hasErrors = true;
    }

    if (novaPoshta.value.trim() === '') {
        hasErrors = true;
    }

    if (!paymentMethod) {
        hasErrors = true;
    }

    if (quantity.value.trim() === '') {
        hasErrors = true;
    }

    if (hasErrors) {
        return;
    }

    const currentOrder = {
        date: new Date().toLocaleString(),
        Товар: `${productName} $${productPrice} ${productDescriptions}`,
        ФИО: fullName.value,
        Город: city.value,
        Новая_почта: novaPoshta.value,
        Оплата: paymentMethod.value,
        Количество: quantity.value,
        Комментарий: comment.value,
        Сумма: ` $ ${selectedProduct ? selectedProduct.price * parseInt(quantity.value) : 0}`,
    };


    form.reset();

    orderDetails.innerHTML = '';
    for (const [fieldName, fieldValue] of Object.entries(currentOrder)) {
        const paragraph = document.createElement('p');
        paragraph.textContent = `${fieldName}: ${fieldValue}`;
        orderDetails.appendChild(paragraph);
    }

    orderSummary.style.display = 'block';
    boxForm.style.display = 'none';

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(currentOrder);
    localStorage.setItem('orders', JSON.stringify(orders));


});

document.getElementById('myOrdersButton').addEventListener('click', showOrders);

function showOrders() {
    const leftElement = document.getElementById('left');
    leftElement.style.display = 'none';

    const centerElement = document.getElementById('center');
    centerElement.innerHTML = '';
    const rightElement = document.getElementById('right');
    rightElement.innerHTML = '';

    const orders = JSON.parse(localStorage.getItem('orders'));

    if (orders && orders.length > 0) {
        for (let i = 0; i < orders.length; i++) {
            const order = orders[i];

            const orderItem = document.createElement('div');
            orderItem.classList.add('orderItem');

            const orderInfo = document.createElement('p');
            orderInfo.textContent = `Дата заказа: ${order.date}, Сумма заказа: $${order.Сумма}`;
            orderItem.appendChild(orderInfo);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.addEventListener('click', function () {
                deleteOrder(order);
            });
            orderItem.appendChild(deleteButton);

            const detailsButton = document.createElement('button');
            detailsButton.textContent = 'Подробнее';
            detailsButton.addEventListener('click', function () {
                showOrderDetails(order);
            });
            orderItem.appendChild(detailsButton);

            centerElement.appendChild(orderItem);
        }
    }

    const backButton = document.createElement('button');
    backButton.textContent = 'Назад';
    backButton.addEventListener('click', function () {
        leftElement.style.display = 'block';
        centerElement.style.display = 'block';
        showCategories();
    });
    centerElement.appendChild(backButton);
}

function showOrderDetails(order) {
    const rightElement = document.getElementById('right');
    rightElement.innerHTML = '';

    const orderDetails = document.createElement('div');
    orderDetails.classList.add('orderDetails');

    orderDetails.innerHTML = `
        <p>Дата заказа: ${order.date}</p>
        <P>Товар: ${order.Товар}</P>
        <p>ФИО покупателя: ${order.ФИО}</p>
        <p>Город: ${order.Город}</p>
        <p>Номер отделения Новой почты: ${order.Новая_почта}</p>
        <p>Способ оплаты: ${order.Оплата}</p>
        <p>Количество: ${order.Количество}</p>
        <p>Сумма заказа: ${order.Сумма}</p>
        <p>Комментарий к заказу: ${order.Комментарий}</p>
    `;

    rightElement.appendChild(orderDetails);

}

function deleteOrder(order) {
    const orders = JSON.parse(localStorage.getItem('orders'));
    const updatedOrders = orders.filter(function (o) {
        return o.date !== order.date;
    });
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    showOrders();
}