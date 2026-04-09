let n = 2;
n = n*2;
console.log(n);

var shopName = 'Annapurna Momo House';
var totalItems = 5;
var pricePerItem = 80;
var discount = 0.1;
 
function printReceipt(name, qty, price, disc) {
  let total = qty * price;
  let finalTotal = total - (total * disc);
  console.log('Welcome to: ' + name);
  console.log('Items: ' + qty + ' | Price each: Rs.' + price);
  console.log('Subtotal: Rs.' + total);
  console.log('After 10% discount: Rs.' + finalTotal);
}
printReceipt(shopName, totalItems, pricePerItem, discount);
 
function greetCustomer(customerName) {
  if (customerName === undefined) { customerName = 'Valued Customer'; }
  return 'Namaste, ' + customerName + '! Your order is ready.';
}
console.log(greetCustomer());
console.log(greetCustomer('Rohan'));