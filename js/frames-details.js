document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('prescriptionForm');
  
    // Retrieve the frame title from the URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const selectedFrame = urlParams.get('frame');
  
    if (selectedFrame) {
        // Find the corresponding frame in your categories array (using the title)
        const selectedFrameData = findFrameByTitle(selectedFrame);
      
        if (selectedFrameData) {
            // Display the selected frame image next to the prescription box
            const frameImage = document.getElementById('frameImage');
            frameImage.src = selectedFrameData.src;
            frameImage.alt = selectedFrameData.color;

            // Optionally, display the frame title too
            const frameTitle = document.getElementById('frameTitle');
            frameTitle.textContent = selectedFrameData.title;
        }
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
  
        const formData = new FormData(form);
        const prescription = {};
  
        // Extract form data
        formData.forEach((value, key) => {
            prescription[key] = value;
        });
  
        // Show the form data for confirmation (you can replace this with any desired functionality)
        alert(`Prescription submitted:\n${JSON.stringify(prescription, null, 2)}`);
    });
});

// Function to find the frame by its title
function findFrameByTitle(title) {
    const categories = [/* Your categories array goes here */];
    
    for (const category of categories) {
        for (const subcategory of category.subcategories) {
            if (subcategory.title === title) {
                // Assume the first color's image is the one selected
                return subcategory.colors[0]; // Modify if you want to get a different color
            }
        }
    }

    return null; // If no frame is found
}

  