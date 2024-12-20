document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the selected frame details from localStorage
    const selectedFrame = JSON.parse(localStorage.getItem('selectedFrame'));
    
    // If there is no frame selected, redirect to the home page or show an error
    if (!selectedFrame) {
      alert('No frame selected.');
      window.location.href = 'index.html'; // Redirect to the home page or any other page
      return;
    }
  
    const { categoryIndex, subcategoryIndex, selectedColor } = selectedFrame;
    const categories = [
        {
          category: 'A5.0',
          subcategories: [
            {
              title: 'A5.0',
              price: '$120',
              colors: [
                { color: 'Black', src: 'images/glasses/A5.0/A5.0 Black.jpg' },
                { color: 'Burnt Orange', src: 'images/glasses/A5.0/A5.0 Burnt Orange.jpg' }
              ]
            },
            {
              title: 'A5.1',
              price: '$130',
              colors: [
                { color: 'Black', src: 'images/glasses/A5.0/A5.1 Black.jpg' },
                { color: 'Brown', src: 'images/glasses/A5.0/A5.1 Tortoise.jpg' }
              ]
            },
            {
                title: 'A5.2',
                price: '$140',
                colors: [
                  { color: 'Black & Red', src: 'images/glasses/A5.0/A5.2 Black & Red.jpg' },
                ],
              },
              {
                title: 'A5.3',
                price: '$130',
                colors: [
                  {color: 'Black', src: 'images/glasses/A5.0/A5.3 Black.jpg'},
                  {color: 'Blue', src: 'images/glasses/A5.0/A5.3 Blue.jpg'},
                ],
              },
              {
                title: 'A5.4',
                price: '$120',
                colors: [
                  {color: 'Black', src: 'images/glasses/A5.0/A5.4 Black.jpg'},
                  {color: 'Pink', src: 'images/glasses/A5.0/A5.4 Pink.jpg'},
                ],
              },
              {
                title: 'A5.5',
                price: '$140',
                colors: [
                  {color: 'Black & Clear', src: 'images/glasses/A5.0/A5.5 Black & Clear Gradient.jpg'},
                  {color: 'Blue & Clear', src: 'images/glasses/A5.0/A5.5 Blue & Clear Gradient.jpg'},
                  {color: 'Pink & Clear', src: 'images/glasses/A5.0/A5.5 Pink & Clear Gradient.jpg'},
                ],
              },
              {
                title: 'A5.6',
                price: '$130',
                colors: [
                  {color: 'Black & Clear', src: 'images/glasses/A5.0/A5.6 Black & Clear.jpg'},
                  {color: 'Blue & Clear', src: 'images/glasses/A5.0/A5.6 Blue & Clear.jpg'},
                  {color: 'Pink & Clear', src: 'images/glasses/A5.0/A5.6 Pink & Clear.jpg'},
                  {color: 'Tortoise', src: 'images/glasses/A5.0/A5.6 Tortoise.jpg'},
                ],
              },
              {
                title: 'A5.8',
                price: '$140',
                colors: [
                  {color: 'Black & Blue', src: 'images/glasses/A5.0/A5.8 Black & Blue.jpg'},
                  {color: 'Black', src: 'images/glasses/A5.0/A5.8 Black.jpg'},
                  {color: 'Clear', src: 'images/glasses/A5.0/A5.8 Clear.jpg'},
                ],
              },
              {
                title: 'A5.9',
                price: '$120',
                colors: [
                  {color: 'Black', src: 'images/glasses/A5.0/A5.9 Black.jpg'},
                  {color: 'Blue', src: 'images/glasses/A5.0/A5.9 Blue.jpg'},
                  {color: 'Clear', src: 'images/glasses/A5.0/A5.9 Clear.jpg'},
                ],
              },
              {
                title: 'A5.91',
                price: '$130',
                colors: [
                  {color: 'Black', src: 'images/glasses/A5.0/A5.91 Black.jpg'},
                  {color: 'Blue', src: 'images/glasses/A5.0/A5.91 Blue.jpg'},
                  {color: 'Brown', src: 'images/glasses/A5.0/A5.91 Brown.jpg'},
                ],
              },
              {
                title: 'A5.92',
                price: '$130',
                colors: [
                  {color: 'Black & Brown', src: 'images/glasses/A5.0/A5.92 Black & Brown.jpg'},
                ],
              },
              {
                title: 'A5.93',
                price: '$130',
                colors: [
                  {color: 'Black & Clear', src: 'images/glasses/A5.0/A5.93 Black & Clear.jpg'},
                  {color: 'Black & Pink', src: 'images/glasses/A5.0/A5.93 Black & Pink.jpg'},
                  {color: 'Brown & Pink', src: 'images/glasses/A5.0/A5.93 Brown & Pink.jpg'},
                ],
              },
              {
                title: 'A5.94',
                price: '$130',
                colors: [
                  {color: 'Black & Brown', src: 'images/glasses/A5.0/A5.94 Black & Brown.jpg'},
                  {color: 'Clear & Silver', src: 'images/glasses/A5.0/A5.94 Clear & Silver.jpg'},
                  {color: 'Clear', src: 'images/glasses/A5.0/A5.94 Clear.jpg'},
                ],
              },
              {
                title: 'A5.95',
                price: '$130',
                colors: [
                  {color: 'Black & Silver', src: 'images/glasses/A5.0/A5.95 Black & Silver.jpg'},
                  {color: 'Black', src: 'images/glasses/A5.0/A5.95 Black.jpg'},
                  {color: 'Clear', src: 'images/glasses/A5.0/A5.95 Clear.jpg'},
                ],
              },
            ],
          },
        {
          category: 'Academic',
          subcategories: [
            {
              title: 'P2027',
              price: '$130',
              colors: [
                { color: 'Black', src: 'images/glasses/Academic/P2027 Black.jpg' },
                { color: 'Red', src: 'images/glasses/Academic/P2027 Red.jpg' }
              ]
            },
            {
              title: 'P2031',
              price: '$120',
              colors: [
                { color: 'Black', src: 'images/glasses/Academic/P2031 Black.jpg' },
                { color: 'Grey', src: 'images/glasses/Academic/P2031 Grey.jpg' }
              ]
            },
            {
                title: 'P7008',
                price: '$130',
                colors: [
                  {color: 'Brown', src: 'images/glasses/Academic/P7008 Brown.jpg'},
                ],
              },
              {
                title: 'P7015',
                price: '$130',
                colors: [
                  {color: 'Black', src: 'images/glasses/Academic/P7015 Black.jpg'},
                ],
              },
              {
                title: 'P8005',
                price: '$130',
                colors: [
                  {color: 'Black', src: 'images/glasses/Academic/P8005-C1 Black.jpg'},
                  {color: 'Blue', src: 'images/glasses/Academic/P8005-C2 Blue.jpg'},
                  {color: 'Grey', src: 'images/glasses/Academic/P8005-C3 Grey.jpg'},
                ],
              },
              {
                title: 'P8010',
                price: '$130',
                colors: [
                  {color: 'Black', src: 'images/glasses/Academic/P8010 Black & Blue.jpg'},
                  {color: 'Demi', src: 'images/glasses/Academic/P8010 Demi.jpg'},
                ],
              },
              {
                title: 'P8015',
                price: '$130',
                colors: [
                  {color: 'Pink', src: 'images/glasses/Academic/P8015 Pink.jpg'},
                  {color: 'Black', src: 'images/glasses/Academic/P8015-Black.jpg'},
                ],
              },
              {
                title: 'P8034',
                price: '$130',
                colors: [
                  {color: 'Black', src: 'images/glasses/Academic/P8034 Black.jpg'},
                  {color: 'Brown', src: 'images/glasses/Academic/P8034 Brown.jpg'},
                  {color: 'Clear', src: 'images/glasses/Academic/P8034 Clear.jpg'},
                  {color: 'Pink', src: 'images/glasses/Academic/P8034 Pink.jpg'},
                ],
              },
          ]
        }
      ];
      
    // Assuming you have a global array `categories` containing category and subcategory data
    const frame = categories[categoryIndex]?.subcategories[subcategoryIndex];
  
    // Check if the frame is valid before proceeding
    if (!frame) {
      alert('Frame not found.');
      window.location.href = 'index.html'; // Or show an appropriate error page
      return;
    }
  
    // Get the selected color's image source
    const selectedColorImage = frame.colors.find(color => color.color === selectedColor)?.src;
  
    // Check if selectedColorImage exists, else provide a fallback
    if (!selectedColorImage) {
      alert('Selected color not found.');
      window.location.href = 'index.html'; // Redirect or handle appropriately
      return;
    }
  
    // Find elements to display frame details
    const frameImageContainer = document.querySelector('.frame-image-container');
    const frameTitle = document.querySelector('.frame-title');
    const framePrice = document.querySelector('.frame-price');
    const colorOptionsContainer = document.querySelector('.color-options');
  
    // Update the page with the selected frame details
    if (frameImageContainer) {
        // Wrap the image inside a card/container to control its size
      frameImageContainer.innerHTML = `
        <div class="frame-image-card">
          <img src="${selectedColorImage}" alt="${frame.title}">
        </div>
      `;
    }
    if (frameTitle) {
      frameTitle.textContent = frame.title;
    }
    if (framePrice) {
      framePrice.textContent = frame.price;
    }
  
    // Optionally, you can also display available color options again
    if (colorOptionsContainer) {
      colorOptionsContainer.innerHTML = frame.colors.map((color, index) => `
        <input type="radio" name="color" id="color-${index}" value="${color.color}" ${color.color === selectedColor ? 'checked' : ''}>
        <label for="color-${index}">${color.color}</label>
      `).join('');
    }
  
    // Update the frame image when the user selects a different color
    colorOptionsContainer.addEventListener('change', function(event) {
      const selectedColor = event.target.value;
      const selectedColorData = frame.colors.find(color => color.color === selectedColor);
      if (selectedColorData) {
        // Update the image based on the selected color
        frameImageContainer.innerHTML = `<img src="${selectedColorData.src}" alt="${frame.title}">`;
      }
    });
  
    // You could add additional functionality here (e.g., adding to cart, prescription input, etc.)
  });

  