document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('prescriptionForm');
  
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
  
      // Optionally, you could redirect to another page after submission:
      // window.location.href = 'some-other-page.html';
    });
  });
  