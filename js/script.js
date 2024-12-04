document.addEventListener('DOMContentLoaded', function() {

    // Example frame selection logic
    const frameButton = document.querySelector('.frame-button');
    if (frameButton) {
      frameButton.addEventListener('click', function() {
        const selectedFrame = document.querySelector('.frame-card').dataset.frame;
        // Direct the user to the prescription/non-prescription page
        window.location.href = `frame-details.html?frame=${selectedFrame}`;
      });
    }
  
  });
  
