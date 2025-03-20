// Wait for the DOM to fully load before executing script
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const frameTitle = urlParams.get("title");
  const framePrice = urlParams.get("price");
  const frameImage = urlParams.get("image");
  const frameColor = urlParams.get("color");

  // Handle missing data
  if (!frameTitle || !framePrice || !frameImage) {
      alert("Incomplete product information. Redirecting to shop.");
      window.location.href = "/frames.html";
      return;
  }

  // Display frame details on the page
  document.querySelector("#frame-title").textContent = frameTitle;
  document.querySelector("#frame-price").textContent = framePrice;
  document.querySelector("#frame-image").src = frameImage;
  document.querySelector("#frame-color").textContent = frameColor || "Default Color";
});

// Function to save prescription and product details
function savePrescription(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Capture prescription values from form inputs
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

  // Retrieve frame details from the displayed content
  const frameDetails = {
      title: document.querySelector("#frame-title").textContent,
      price: document.querySelector("#frame-price").textContent,
      image: document.querySelector("#frame-image").src,
      color: document.querySelector("#frame-color").textContent
  };

  // Save prescription and frame details to localStorage
  localStorage.setItem("prescription", JSON.stringify(prescription));
  localStorage.setItem("productImage", frameDetails.image);
  localStorage.setItem("subcategoryTitle", frameDetails.title);
  localStorage.setItem("subcategoryPrice", frameDetails.price);
  localStorage.setItem("selectedColor", frameDetails.color);

  console.log("Prescription saved:", prescription);
  console.log("Frame details saved:", frameDetails);

  // Redirect to the review page after saving data
  window.location.href = "/review.html";
}

// Attach event listener to the form submit button
document.getElementById("prescriptionForm").addEventListener("submit", savePrescription);
