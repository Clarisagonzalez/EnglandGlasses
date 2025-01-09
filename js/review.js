document.addEventListener("DOMContentLoaded", function () {
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
        const sphOdElement = document.getElementById("sph-od-display");
        if (sphOdElement) sphOdElement.textContent = prescription.sphOd || "-";

        const cylOdElement = document.getElementById("cyl-od-display");
        if (cylOdElement) cylOdElement.textContent = prescription.cylOd || "-";

        const axisOdElement = document.getElementById("axis-od-display");
        if (axisOdElement) axisOdElement.textContent = prescription.axisOd || "-";

        const pdOdElement = document.getElementById("pd-od-display");
        if (pdOdElement) pdOdElement.textContent = prescription.pdOd || "-";

        const sphOsElement = document.getElementById("sph-os-display");
        if (sphOsElement) sphOsElement.textContent = prescription.sphOs || "-";

        const cylOsElement = document.getElementById("cyl-os-display");
        if (cylOsElement) cylOsElement.textContent = prescription.cylOs || "-";

        const axisOsElement = document.getElementById("axis-os-display");
        if (axisOsElement) axisOsElement.textContent = prescription.axisOs || "-";

        const pdOsElement = document.getElementById("pd-os-display");
        if (pdOsElement) pdOsElement.textContent = prescription.pdOs || "-";
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
        subtotalElement.textContent = `$${subcategoryPrice.replace("$", "")}`;
    }

    const addToCartButton = document.getElementById("add-to-cart-btn");
    if (addToCartButton) {
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
    }
});
