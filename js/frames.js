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
    // Generate category button and container for subcategories
    const categoryHTML = `
      <div class="category mb-4">
        <button class="btn btn-secondary w-100 text-left category-btn" data-category="${categoryIndex}">
          ${category.category}
        </button>
        <div class="subcategories collapse mt-3" id="category-${categoryIndex}">
          <!-- Subcategories will be injected here -->
        </div>
      </div>
    `;
    framesContainer.insertAdjacentHTML('beforeend', categoryHTML);

    // Populate subcategories for this category
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
            <a href="frame-details.html?category=${categoryIndex}&subcategory=${subcatIndex}" class="btn btn-primary mt-2">View Details</a>
          </div>
        </div>
      `;
      subcategoriesContainer.insertAdjacentHTML('beforeend', subcategoryHTML);

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
    }
  });
});
