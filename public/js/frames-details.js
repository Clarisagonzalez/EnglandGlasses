// ✅ Retrieve URL parameters
const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
const price = urlParams.get("price");
const image = urlParams.get("image");
const color = urlParams.get("color");

// ✅ Debugging: Check if parameters are being retrieved correctly
console.log("Title:", title);
console.log("Price:", price);
console.log("Image:", image);
console.log("Color:", color);

// ✅ Ensure all required parameters exist
if (!title?.trim() || !price?.trim() || !image?.trim() || !color?.trim()) {
    console.error("Missing product details!");
    console.error("Title:", title);
    console.error("Price:", price);
    console.error("Image:", image);
    console.error("Color:", color);
    alert("Incomplete product information. Please go back and try again.");
    return;
}

// ✅ Update the product display on `frame-details.html`
document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.querySelector("#frame-title");
    const descriptionElement = document.querySelector("#frame-description");
    const imageElement = document.querySelector("#frame-image");
    const priceElement = document.querySelector("#frame-price");
    const colorElement = document.querySelector("#frame-color");

    // ✅ Check if elements exist before updating them
    if (!titleElement || !descriptionElement || !imageElement || !priceElement || !colorElement) {
        console.error("One or more elements are missing from the page!");
        return;
    }

    // ✅ Assign values only if they exist
    titleElement.innerText = title || "Unknown Title";
    descriptionElement.innerText = `Color: ${color || "Unknown"}`;
    imageElement.src = image || "/images/default.jpg";  // Fallback image if missing
    priceElement.innerText = price || "N/A";
    colorElement.innerText = color || "Unknown";
});

// ✅ Function to save prescription and product details to local storage
function savePrescription(event) {
    event.preventDefault();

    // Capture prescription values
    const prescription = {
        sphOd: document.getElementById("sph-od")?.value || null,
        cylOd: document.getElementById("cyl-od")?.value || null,
        axisOd: document.getElementById("axis-od")?.value || null,
        pdOd: document.getElementById("pd-od")?.value || null,
        sphOs: document.getElementById("sph-os")?.value || null,
        cylOs: document.getElementById("cyl-os")?.value || null,
        axisOs: document.getElementById("axis-os")?.value || null,
        pdOs: document.getElementById("pd-os")?.value || null,
    };

    // ✅ Store product details in local storage for the cart
    localStorage.setItem("prescription", JSON.stringify(prescription));
    localStorage.setItem("productTitle", title);
    localStorage.setItem("productImage", image);
    localStorage.setItem("productPrice", price);
    localStorage.setItem("selectedColor", color);

    console.log("Prescription saved:", prescription);
    console.log("Product details saved:", { title, price, image, color });

    // ✅ Redirect to review page
    window.location.href = "/review.html";
}

// ✅ Attach event listener to the prescription form's submit button
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("prescriptionForm");
    if (form) {
        form.addEventListener("submit", savePrescription);
    }
});
