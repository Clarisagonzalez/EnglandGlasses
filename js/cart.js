document.addEventListener('DOMContentLoaded', function () {
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  const cartCountElement = document.getElementById('cart-count');
  const cartTotalElement = document.createElement('li');

  cartTotalElement.className = 'list-group-item d-flex justify-content-between';
  cartTotalElement.innerHTML = `
      <span>Total (USD)</span>
      <strong id="cart-total">$0</strong>
  `;

  function populateCart() {
    let total = 0;

    // Clear existing items
    cartItemsContainer.innerHTML = '';

    if (cartData.length === 0) {
      cartItemsContainer.innerHTML = '<li class="list-group-item">Your cart is empty.</li>';
      cartCountElement.textContent = 0;
      return;
    }

    // Add cart items
    cartData.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex justify-content-between lh-condensed';
      listItem.innerHTML = `
          <div>
              <h6 class="my-0">${item.title}</h6>
              <small class="text-muted">Price: $${item.price}</small>
          </div>
          <span class="text-muted">$${item.price}</span>
          <button class="btn btn-danger btn-sm remove-btn" data-index="${index}">Remove</button>
      `;
      cartItemsContainer.appendChild(listItem);

      // Calculate total
      total += typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price;
    });

    // Add total element
    cartItemsContainer.appendChild(cartTotalElement);
    cartCountElement.textContent = cartData.length;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
  }

  function removeItem(index) {
    // Remove item from cart data
    cartData.splice(index, 1);
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    // Refresh cart display
    populateCart();
  }

  cartItemsContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-btn')) {
      const index = parseInt(event.target.getAttribute('data-index'), 10);
      removeItem(index);
    }
  });

  populateCart();
});
