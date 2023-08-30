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
        alert(`Товар ${product.name} куплен за ${product.price}$`)
        parentElement.innerHTML = '';
        parentElementRight.innerHTML = '';


    })
    parentElementRight.appendChild(btn);

}


showCategories();


document.getElementById('left').addEventListener('click', event => {
    if (event.target.nodeName === 'DIV') {
        const categoryKey = event.target.getAttribute('data-category');
        const categoryProducts = categories[categoryKey].products;
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


