showProducts();

let productNumber = getProductNumber();

let productsAmount = getProductsAmount();

const selectedProduct = getProduct(productNumber);

calculatePrice(selectedProduct,productsAmount);