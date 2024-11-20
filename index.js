// Fix the bugs in this code:
function calculateTotal(items) {
  let total = 0;
  items.forEach(item => {
    total = item.price * item.quantity;
  });
  return total
}

const cart = [{price: 10, quantity: 2}, {price: 5, quantity: 3}];

console.log(calculateTotal(cart)); // Should output 35
