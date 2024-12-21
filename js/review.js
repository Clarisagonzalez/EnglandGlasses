// Function to retrieve prescription data and display it on the review page
window.onload = function () {
    const prescription = JSON.parse(localStorage.getItem("prescription"));
    const productImageURL = localStorage.getItem("productImage");
    const productTitle = localStorage.getItem("subcategoryTitle");
    const subcategoryPrice = localStorage.getItem("subcategoryPrice");
  
    // Display prescription details
    if (prescription) {
      document.getElementById("sph-od-display").textContent = prescription.sphOd;
      document.getElementById("cyl-od-display").textContent = prescription.cylOd;
      document.getElementById("axis-od-display").textContent = prescription.axisOd;
      document.getElementById("pd-od-display").textContent = prescription.pdOd;
  
      document.getElementById("sph-os-display").textContent = prescription.sphOs;
      document.getElementById("cyl-os-display").textContent = prescription.cylOs;
      document.getElementById("axis-os-display").textContent = prescription.axisOs;
      document.getElementById("pd-os-display").textContent = prescription.pdOs;
    }
  
    // Display product image
    const productImageElement = document.getElementById("product-image");
    if (productImageElement && productImageURL) {
      productImageElement.src = productImageURL;
    }
  
    // Display product title
    const productTitleElement = document.getElementById("product-title");
    if (productTitleElement && productTitle) {
      productTitleElement.textContent = productTitle;
    }
  
    // Display subtotal
    const subtotalElement = document.getElementById("subtotal");
    if (subtotalElement && subcategoryPrice) {
      subtotalElement.textContent = `$${subcategoryPrice}`;
    }
  
    // Add event listener to the "Add to Cart" button
    const addToCartButton = document.getElementById("add-to-cart-btn");
    addToCartButton.addEventListener("click", function () {
      const cartItem = {
        title: productTitle,
        price: parseFloat(subcategoryPrice.replace("$", "")),
        image: productImageURL,
        prescription,
        quantity: 1,
      };
  
      // Retrieve existing cart items from localStorage
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      // Check if the item is already in the cart
      const existingItemIndex = cart.findIndex((item) => item.title === cartItem.title);
      if (existingItemIndex >= 0) {
        // Increment the quantity if the item already exists
        cart[existingItemIndex].quantity += 1;
      } else {
        // Add the new item to the cart
        cart.push(cartItem);
      }
  
      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
  
      // Notify the user
      alert(`${cartItem.title} has been added to your cart.`);
  
      // Redirect to the cart page
      window.location.href = "cart.html";
    });
  };
  