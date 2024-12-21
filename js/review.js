// Function to retrieve prescription data from localStorage and display it on the review page
window.onload = function() {
    const prescription = JSON.parse(localStorage.getItem("prescription"));
    const productImageURL = localStorage.getItem("productImage");
    const productTitle = localStorage.getItem("subcategoryTitle");
    const subcategoryPrice = localStorage.getItem("subcategoryPrice");

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
};