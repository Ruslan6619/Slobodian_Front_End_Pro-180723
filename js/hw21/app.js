function showCategories() {
    const parentElement = document.getElementById('left');

    for (let categoryKey in categories) {
        const category = categories[categoryKey];

        let element = document.createElement('div');
        element.textContent = category.name;
        element.setAttribute('data-category', categoryKey)
        parentElement.appendChild(element);
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


function productDescription(product, category) {
    const parentElement = document.getElementById('center');
    const parentElementRight = document.getElementById('right');
    const main = document.getElementById('main');
    const wrapper = document.getElementById('wrapper');
    const boxOrderForm = document.getElementById('boxOrderForm');

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
        orderDetails.textContent = `Товар ${product.name} куплен за $${product.price}`
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

        productDescription(product, categoryKey);
    }
});


document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы, чтобы не обновлять страницу

    const fullName = document.getElementById('fullName');
    const city = document.getElementById('city');
    const novaPoshta = document.getElementById('novaPoshta');
    const paymentMethod = document.querySelector('input[name="Оплата"]:checked');
    const quantity = document.getElementById('quantity');
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

    const formData = new FormData(form);

    for (const [fieldName, fieldValue] of formData) {
        const paragraph = document.createElement('p');
        paragraph.textContent = `${fieldName}: ${fieldValue}`;
        orderDetails.appendChild(paragraph);
    }
    orderSummary.style.display = 'block';
    boxForm.style.display = 'none';

    form.reset();

});




