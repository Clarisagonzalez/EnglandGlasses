document.addEventListener('DOMContentLoaded', function () {
  // Define categories and subcategories
  const categories = [
    {
      category: 'A5.0',
      subcategories: [
        {
          title: 'A5.0',
          price: '$120',
          colors: [
            { color: 'Black', src: 'images/glasses/A5.0/A5.0 Black.jpg' },
            { color: 'Burnt Orange', src: 'images/glasses/A5.0/A5.0 Burnt Orange.jpg' },
          ],
        },
        {
          title: 'A5.1',
          price: '$130',
          colors: [
            { color: 'Black', src: 'images/glasses/A5.0/A5.1 Black.jpg' },
            { color: 'Brown', src: 'images/glasses/A5.0/A5.1 Tortoise.jpg' },
          ],
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
            {color: 'Black', src: 'images/glasses/Academic/P2027 Black.jpg'},
            {color: 'Red', src: 'images/glasses/Academic/P2027 Red.jpg'},
          ],
        },
        {
          title: 'P2031',
          price: '$120',
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P2031 Black.jpg'},
            {color: 'Grey', src: 'images/glasses/Academic/P2031 Grey.jpg'},
          ],
        },
      ],
    },
  ];

  // Select container for frames
  const framesContainer = document.querySelector('.frames-container');

   // Generate HTML for each category and its subcategories
   categories.forEach((category, categoryIndex) => {
    const categoryHTML = `
      <div class="category mb-4">
        <button class="btn btn-secondary w-100 text-left category-btn" data-category="${categoryIndex}">
          ${category.category}
        </button>
        <div class="subcategories collapse mt-3" id="category-${categoryIndex}">
        </div>
      </div>
    `;
    framesContainer.insertAdjacentHTML('beforeend', categoryHTML);

    const subcategoriesContainer = document.querySelector(`#category-${categoryIndex}`);
    category.subcategories.forEach((subcat, subcatIndex) => {
      const colorOptionsHTML = subcat.colors
        .map(
          (color, colorIndex) => `
            <input type="radio" id="color-${categoryIndex}-${subcatIndex}-${colorIndex}" name="color-${categoryIndex}-${subcatIndex}" value="${color.color}" ${colorIndex === 0 ? 'checked' : ''}>
            <label for="color-${categoryIndex}-${subcatIndex}-${colorIndex}">${color.color}</label>
          `
        )
        .join('');

        const subcategoryHTML = `
        <div class="card">
          <img id="frame-image-${categoryIndex}-${subcatIndex}" src="${subcat.colors[0].src}" class="card-img-top" alt="${subcat.title}">
          <div class="card-body">
            <h5 class="card-title">${subcat.title}</h5>
            <p class="card-text">${subcat.price}</p>
            <div>
              <label>Choose Color:</label><br>
              ${colorOptionsHTML}
            </div>
            <a href="#" class="btn btn-primary mt-2 view-details-btn" data-category="${categoryIndex}" data-subcategory="${subcatIndex}">View Details</a>
            <div class="prescription-options" style="display: none; margin-top: 10px;">
              <p>Do you have a prescription?</p>
              <button class="btn btn-secondary yes-btn" data-frame="${subcat.title}" style="margin-right: 5px;">Yes</button>
              <button class="btn btn-secondary no-btn">No</button>
            </div>
          </div>
        </div>
      `;
      subcategoriesContainer.insertAdjacentHTML('beforeend', subcategoryHTML);
      
      document.body.addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('view-details-btn')) {
          event.preventDefault();
      
          const cardBody = event.target.closest('.card-body');
          if (cardBody) {
            const prescriptionOptions = cardBody.querySelector('.prescription-options');
            if (prescriptionOptions) {
              prescriptionOptions.style.display = 'block';
            }
          }
        }
      
        // Handle "Yes" button click
        if (event.target && event.target.classList.contains('yes-btn')) {
          const frameTitle = event.target.dataset.frame;
          window.location.href = `frame-details.html?frame=${encodeURIComponent(frameTitle)}`;
        }
      
        // Handle "No" button click
        if (event.target && event.target.classList.contains('no-btn')) {
          event.preventDefault();
          alert("Thank you! You can proceed without entering a prescription.");
        }
      });
      

      // Add event listeners for color selection
      subcat.colors.forEach((color, colorIndex) => {
        const colorRadio = document.querySelector(`#color-${categoryIndex}-${subcatIndex}-${colorIndex}`);
        const imageElement = document.getElementById(`frame-image-${categoryIndex}-${subcatIndex}`);

        colorRadio.addEventListener('change', function () {
          if (this.checked) {
            imageElement.src = color.src;
          }
        });
      });
    });
  });

  // Add event listeners to toggle subcategories
  framesContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('category-btn')) {
      const categoryIndex = event.target.dataset.category;
      const subcategories = document.querySelector(`#category-${categoryIndex}`);
      subcategories.classList.toggle('collapse');
    } else if (event.target.classList.contains('view-details-btn')) {
      const categoryIndex = event.target.dataset.category;
      const subcatIndex = event.target.dataset.subcategory;
      showFrameDetails(categoryIndex, subcatIndex);
    }
  });

  // Function to display frame details
  function showFrameDetails(categoryIndex, subcatIndex) {
    const selectedSubcategory = categories[categoryIndex].subcategories[subcatIndex];
    const detailsContainer = document.getElementById('frame-details');

    detailsContainer.innerHTML = `
      <h2>${selectedSubcategory.title}</h2>
      <img src="${selectedSubcategory.colors[0].src}" alt="${selectedSubcategory.title}">
      <p>${selectedSubcategory.price}</p>
      <div>
        <label>Choose Color:</label>
        <select id="color-select">
          ${selectedSubcategory.colors.map(color => `
            <option value="${color.src}">${color.color}</option>
          `).join('')}
        </select>
      </div>
      <button id="prescription-btn">Prescription</button>
      <button id="non-prescription-btn">Non-Prescription</button>
    `;

    detailsContainer.style.display = 'block';

    const colorSelect = document.getElementById('color-select');
    colorSelect.addEventListener('change', () => {
      const selectedColorSrc = colorSelect.value;
      const frameImage = detailsContainer.querySelector('img');
      frameImage.src = selectedColorSrc;
    });

    document.getElementById('prescription-btn').addEventListener('click', () => {
      // Implement prescription handling logic here
      alert('Prescription selected. Implement form here.');
    });

    document.getElementById('non-prescription-btn').addEventListener('click', () => {
      // Implement non-prescription handling logic here
      alert('Non-prescription selected. Proceed to checkout.');
    });

    // Generate dynamic color options inside 'color-options' div
    const colorOptionsContainer = document.getElementById('color-options');
    if (colorOptionsContainer) {
      selectedSubcategory.colors.forEach((color, colorIndex) => {
        const radioHTML = `
          <input type="radio" id="detail-color-${colorIndex}" name="detail-color" value="${color.color}" ${colorIndex === 0 ? 'checked' : ''}>
          <label for="detail-color-${colorIndex}">${color.color}</label>
        `;
        colorOptionsContainer.innerHTML += radioHTML;
      });
    
      // After adding the radio buttons, add event listeners
      const radioButtons = colorOptionsContainer.querySelectorAll('input[name="detail-color"]');
      radioButtons.forEach(button => {
        button.addEventListener('change', function() {
          // Handle the color change here
          console.log(`Color selected: ${this.value}`);
        });
      });
    
    } else {
      console.error('Color options container not found!');
    }

    // Add event listeners for the color selection in the details view
    selectedSubcategory.colors.forEach((color, colorIndex) => {
      const colorRadio = document.querySelector(`#detail-color-${colorIndex}`);
      colorRadio.addEventListener('change', function () {
        if (this.checked) {
          const frameImage = detailsContainer.querySelector('img');
          frameImage.src = color.src;
        }
      });
    });
  }
});