window.onload = function () {
    const prescription = JSON.parse(localStorage.getItem("prescription"));
    const productImageURL = localStorage.getItem("productImage");
    const productTitle = localStorage.getItem("subcategoryTitle");
    const subcategoryPrice = localStorage.getItem("subcategoryPrice");
  
    if (!productTitle || !subcategoryPrice || !productImageURL) {
      alert("Incomplete product information. Please go back and try again.");
      window.location.href = "frames.html";
      return;
    }
  
    if (prescription) {
      document.getElementById("sph-od-display").textContent = prescription.sphOd || "-";
      document.getElementById("cyl-od-display").textContent = prescription.cylOd || "-";
      document.getElementById("axis-od-display").textContent = prescription.axisOd || "-";
      document.getElementById("pd-od-display").textContent = prescription.pdOd || "-";
      document.getElementById("sph-os-display").textContent = prescription.sphOs || "-";
      document.getElementById("cyl-os-display").textContent = prescription.cylOs || "-";
      document.getElementById("axis-os-display").textContent = prescription.axisOs || "-";
      document.getElementById("pd-os-display").textContent = prescription.pdOs || "-";
    }
  
    const productImageElement = document.getElementById("product-image");
    if (productImageElement && productImageURL) {
      productImageElement.src = productImageURL;
    }
  
    const productTitleElement = document.getElementById("product-title");
    if (productTitleElement) {
      productTitleElement.textContent = productTitle;
    }
  
    const subtotalElement = document.getElementById("subtotal");
    if (subtotalElement) {
      subtotalElement.textContent = `$${subcategoryPrice}`;
    }
  
    const addToCartButton = document.getElementById("add-to-cart-btn");
    addToCartButton.addEventListener("click", function () {
      const cartItem = {
        title: productTitle,
        price: parseFloat(subcategoryPrice.replace("$", "")),
        image: productImageURL,
        prescription,
        quantity: 1,
      };
  
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItemIndex = cart.findIndex((item) => item.title === cartItem.title);
      if (existingItemIndex >= 0) {
        cart[existingItemIndex].quantity += 1;
      } else {
        cart.push(cartItem);
      }
  
      localStorage.setItem("cart", JSON.stringify(cart));
  
      // Display notification
      const notification = document.createElement("div");
      notification.className = "alert alert-success";
      notification.textContent = `${cartItem.title} has been added to your cart.`;
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.remove();
        const goToCart = confirm("Do you want to view your cart?");
        if (goToCart) {
          window.location.href = "cart.html";
        }
      }, 2000);
    });
  };
  