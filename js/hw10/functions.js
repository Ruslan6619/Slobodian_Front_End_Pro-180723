function showProducts() {
  for(let i = 0; i < products.length; i++) {
    console.log(`#${(i + 1)} Product: ${products[i].name} | Price: $${products[i].price}`);
  }
}


function getProductNumber() {
  let valueProductNumber;

  do {
    valueProductNumber = parseInt(prompt('Enter product number which you wanna buy:'));
  } while(valueProductNumber < 1 || valueProductNumber > products.length || isNaN(valueProductNumber));

  return valueProductNumber;
}


function getProductsAmount() {
  let valueProductAmount;

  do {
    valueProductAmount = parseInt(prompt('Enter products amount:'));
  } while(valueProductAmount < 1 || isNaN(valueProductAmount));

  return valueProductAmount;
}


function getProduct(number){
  return products[number - 1];
}


function calculatePrice(product, amount){
  let price = getPrice(product.price, amount);
  const startDiscountFrom = 10000;
  console.log('Price: $', price);
  if (getPrice(price, amount) > startDiscountFrom){
    console.log('Congrats! You got a discount, the final price is $' + getPriceDiscount(price) );
  }
}


function getPrice(price, amount){
  return price * amount ;
}


function getPriceDiscount(price){
  const discount = 20;
  const discountValue = (100 - discount) / 100;
  const finalPrice = price * discountValue;

  return finalPrice;
}