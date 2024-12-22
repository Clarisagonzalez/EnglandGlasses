document.addEventListener('DOMContentLoaded', function () {
  // Retrieve cart data from local storage
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  
  const cartItemsContainer = document.getElementById('cart-items');
  const cartCountElement = document.getElementById('cart-count');
  const cartTotalElement = document.createElement('li');

  cartTotalElement.className = 'list-group-item d-flex justify-content-between';
  cartTotalElement.innerHTML = `
    <span>Total (USD)</span>
    <strong id="cart-total">$0</strong>
  `;

  cartItemsContainer.appendChild(cartTotalElement);

  function populateCart() {
    let total = 0;

    if (cartData.length === 0) {
      cartItemsContainer.innerHTML = '<li class="list-group-item">Your cart is empty.</li>';
      cartCountElement.textContent = 0;
      document.getElementById('cart-total').textContent = '$0';
      return;
    }

    cartData.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex justify-content-between lh-condensed';
      listItem.innerHTML = `
        <div>
          <h6 class="my-0">${item.title}</h6>
          <small class="text-muted">Color: ${item.color}</small><br>
          <small class="text-muted">Price: ${item.price}</small>
        </div>
        <span class="text-muted">${item.price}</span>
      `;
      cartItemsContainer.insertBefore(listItem, cartTotalElement);
      total += parseFloat(item.price.replace('$', ''));
    });

    cartCountElement.textContent = cartData.length;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
  }

  populateCart();
});
