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
            {color: 'Clear', src: 'images/glasses/A5.0/A5.94 Clear.jpg'}
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
            {color: 'Black', src: 'images/glasses/Academic/P8010 Black.jpg'},
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
          title: 'P8016',
          price: '$130',
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8016 Black.jpg'},
            {color: 'Blue', src: 'images/glasses/Academic/P8016 Blue.jpg'},
            {color: 'Peach', src: 'images/glasses/Academic/P8016 Peach.jpg'},
          ],
        },
        {
          title: 'P8021',
          price: '$130',
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8021 Black.jpg'},
            {color: 'Clear', src: 'images/glasses/Academic/P8021 Clear.jpg'},
            {color: 'Wine', src: 'images/glasses/Academic/P8021 Wine.jpg'},
          ],
        },
        {
          title: 'P8026',
          price: '$130',
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8026 Black.jpg'},
            {color: 'Pink', src: 'images/glasses/Academic/P8026 Pink.jpg'},
            {color: 'Teal', src: 'images/glasses/Academic/P8026 Teal.jpg'},
          ],
        },
        {
          title: 'P8029',
          price: '$130',
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8029 Black.jpg'},
            {color: 'Blue', src: 'images/glasses/Academic/P8029 Blue.jpg'},
      
          ],
        },{
          title: 'P8032',
          price: '$130',
          colors: [
            {color: 'Hot Pink', src: 'images/glasses/Academic/P8032 Hotpink.jpg'},
      
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
        {
          title: 'P8036',
          price: '$130',
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8036 Black.jpg'},
            {color: 'Brown', src: 'images/glasses/Academic/P8036 Brown.jpg'},
            {color: 'Clear', src: 'images/glasses/Academic/P8036 Clear.jpg'},
          ],
        },
        {
          title: 'P8037',
          price: '$130',
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8037 Black.jpg'},
            {color: 'Wine', src: 'images/glasses/Academic/P8037 Wine.jpg'},
          ],
        },
        {
          title: 'P8038',
          price: '$130',
          colors: [
            {color: 'Black/Blue', src: 'images/glasses/Academic/P8038 Black-Blue.jpg'},
            {color: 'Black', src: 'images/glasses/Academic/P8038 Black.jpg'},
          ],
        },
        {
          title: 'P8040',
          price: '$130',
          colors: [
            {color: 'Blue', src: 'images/glasses/Academic/P8040 Blue.jpg'},
            {color: 'Brown', src: 'images/glasses/Academic/P8040 Brown.jpg'},
    
          ],
        },
        {
          title: 'P8041',
          price: '$130',
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8041 Black.jpg'},
            {color: 'Brown', src: 'images/glasses/Academic/P8041 Brown.jpg'},
          ],
        },
        {
          title: 'P8042',
          price: '$130',
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8042 Black.jpg'},
          
          ],
        },
        {
          title: 'P8045',
          price: '$130',
          colors: [
            {color: 'Brown', src: 'images/glasses/Academic/P8045 Brown.jpg'},
          
          ],
        },
        {
          title: 'P8046',
          price: '$130',
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8046 Black.jpg'},
            {color: 'Brown', src: 'images/glasses/Academic/P8046 Brown.jpg'},
            {color: 'Grey', src: 'images/glasses/Academic/P8046 Grey.jpg'},
          ],
        },
        {
          title: 'P8047',
          price: '$130',
          colors: [
            {color: 'Blue', src: 'images/glasses/Academic/P8047 Blue.jpg'},
            {color: 'Pink', src: 'images/glasses/Academic/P8047 Pink.jpg'},
            {color: 'Wine', src: 'images/glasses/Academic/P8047 Wine.jpg'},
          ],
        },
        {
          title: 'P8048',
          price: '$130',
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8048 Black.jpg'},
            {color: 'Pink', src: 'images/glasses/Academic/P8048 Pink.jpg'},
            {color: 'Wine', src: 'images/glasses/Academic/P8048 Wine.jpg'},
          ],
        },
        {
          title: 'P8049',
          price: '$130',
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8049 Black.jpg'},
            {color: 'Clear', src: 'images/glasses/Academic/P8049 Clear.jpg'},
            {color: 'Wine', src: 'images/glasses/Academic/P8049 Wine.jpg'},
          ],
        },{
          title: 'P8050',
          price: '$130',
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8050 Black.jpg'},
            {color: 'Pink', src: 'images/glasses/Academic/P8050 Pink.jpg'},
            {color: 'Wine', src: 'images/glasses/Academic/P8050 Wine.jpg'},
          ],
        },{
          title: 'P8052',
          price: '$130',
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8052 Black.jpg'},
            {color: 'Wine', src: 'images/glasses/Academic/P8052 Wine.jpg'},
          ],
        },{
          title: 'P8053',
          price: '$130',
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8053 Black.jpg'},
          ],
        },
        {
          title: 'P8055',
          price: '$130',
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8055 Black.jpg'},
            {color: 'Brown', src: 'images/glasses/Academic/P8055 Brown.jpg'},
            {color: 'Grey', src: 'images/glasses/Academic/P8055 Grey.jpg'},
          ],
        },
      ],
    },
    {
          category: 'CEO',  
          subcategories: [
            {
              title: 'CEO Abraham',
              price: '$150',
              colors: [
                { color: 'Gold', src: 'images/glasses/CEO/CEO Abraham Gold.jpg' },
                { color: 'Silver', src: 'images/glasses/CEO/CEO Abraham Silver.jpg' },
                { color: 'Grey', src: 'images/glasses/CEO/CEO Abraham Grey.jpg' },
              ],
            },
            {
              title: 'CEO Andrew',
              price: '$160',
              colors: [
                { color: 'Gold', src: 'images/glasses/CEO/CEO Andrew Gold.jpg' },
                { color: 'Grey', src: 'images/glasses/CEO/CEO Andrew Grey.jpg' },
                { color: 'Silver', src: 'images/glasses/CEO/CEO Andrew Silver.jpg' },
              ],
            },
            {
              title: 'CEO Chloe',
              price: '$170',
              colors: [
                { color: 'Gold', src: 'images/glasses/CEO/CEO Chloe Gold.jpg' },
                { color: 'Silver', src: 'images/glasses/CEO/CEO Chloe Silver.jpg' },
              
              ],
            },
            {
              title: 'CEO Esther',
              price: '$170',
              colors: [
                { color: 'Burgundy', src: 'images/glasses/CEO/CEO Esther Burgundy.jpg' },
                { color: 'Pink', src: 'images/glasses/CEO/CEO Esther Pink.jpg' },
                { color: 'Silver', src: 'images/glasses/CEO/CEO Esther Silver.jpg' },
              ],
            },
            {
              title: 'CEO Ezra',
              price: '$170',
              colors: [
                { color: 'Gold', src: 'images/glasses/CEO/CEO Ezra Gold.jpg' },
                { color: 'Grey', src: 'images/glasses/CEO/CEO Ezra Grey.jpg' },
                { color: 'Silver', src: 'images/glasses/CEO/CEO Ezra Silver.jpg' },
              ],
            },
            {
              title: 'CEO Job',
              price: '$170',
              colors: [
                { color: 'Gold', src: 'images/glasses/CEO/CEO Job Gold.jpg' },
                { color: 'Grey', src: 'images/glasses/CEO/CEO Job Grey.jpg' },
                { color: 'Silver', src: 'images/glasses/CEO/CEO Job Silver.jpg' },
              ],
            },
            {
              title: 'CEO Jude',
              price: '$170',
              colors: [
                { color: 'Gold', src: 'images/glasses/CEO/CEO Jude Gold.jpg' },
                { color: 'Grey', src: 'images/glasses/CEO/CEO Jude Grey.jpg' },
                { color: 'Silver', src: 'images/glasses/CEO/CEO Jude Silver.jpg' },
              ],
            },
          ],
        },
      ];

   // Select container for frames
const framesContainer = document.querySelector('.frames-container');

// Generate HTML for each category and its subcategories
categories.forEach((category, categoryIndex) => {
  // Generate HTML for each category and its subcategories
  const categoryHTML = `
    <div class="category mb-4">
      <button class="frame-btn w-100 text-left category-btn" data-category="${categoryIndex}">
        ${category.category}
      </button>
      <div class="subcategories collapse mt-3" id="category-${categoryIndex}">
        <!-- Subcategories will be added here dynamically -->
      </div>
    </div>
  `;
  framesContainer.insertAdjacentHTML('beforeend', categoryHTML);

  // Subcategories container
  const subcategoriesContainer = document.querySelector(`#category-${categoryIndex}`);

  // Generate HTML for each subcategory within the current category
  category.subcategories.forEach((subcat, subcatIndex) => {
    const colorOptionsHTML = subcat.colors
      .map(
        (color, colorIndex) => `
          <input type="radio" id="color-${categoryIndex}-${subcatIndex}-${colorIndex}" 
                 name="color-${categoryIndex}-${subcatIndex}" value="${color.color}" 
                 ${colorIndex === 0 ? 'checked' : ''}>
          <label for="color-${categoryIndex}-${subcatIndex}-${colorIndex}">${color.color}</label>
        `
      )
      .join('');

    // Subcategory HTML
    const subcategoryHTML = `
      <div class="card">
        <img id="frame-image-${categoryIndex}-${subcatIndex}" src="${subcat.colors[0].src}" 
             class="card-img-top" alt="${subcat.title}">
        <div class="card-body">
          <h5 class="card-title">${subcat.title}</h5>
          <p class="card-text">${subcat.price}</p>
          <div>
            <label>Choose Color:</label><br>
            ${colorOptionsHTML}
          </div>
          <a href="#" class="btn btn-primary mt-2 view-details-btn" 
             data-category="${categoryIndex}" data-subcategory="${subcatIndex}">View Details</a>
        </div>
      </div>
    `;
    subcategoriesContainer.insertAdjacentHTML('beforeend', subcategoryHTML);

    // Add event listeners for color selection
    subcat.colors.forEach((color, colorIndex) => {
      const colorRadio = document.querySelector(
        `#color-${categoryIndex}-${subcatIndex}-${colorIndex}`
      );
      const imageElement = document.getElementById(
        `frame-image-${categoryIndex}-${subcatIndex}`
      );
      colorRadio.addEventListener('change', function () {
        if (this.checked) {
          imageElement.src = color.src;
        }
      });
    });
  });
});

// Add event listeners for category buttons after all content is injected
document.querySelectorAll('.category-btn').forEach((btn) => {
  btn.addEventListener('click', function () {
    // Remove active class from all buttons
    document.querySelectorAll('.category-btn').forEach((btn) => {
      btn.classList.remove('active');
    });

    // Add active class to the clicked button
    this.classList.add('active');

    // Toggle the visibility of the subcategories for this category
    const categoryId = this.dataset.category;
    const subcategories = document.getElementById(`category-${categoryId}`);
    if (subcategories) {
      subcategories.classList.toggle('collapse');
    }
  });
});

// Add event listeners for "View Details" buttons after all content is injected
document.querySelectorAll('.view-details-btn').forEach((button) => {
  button.addEventListener('click', function (event) {
    event.preventDefault(); // Stop the default behavior
    const categoryIndex = button.getAttribute('data-category');
    const subcategoryIndex = button.getAttribute('data-subcategory');

    // Redirect to the details page
    window.location.href = `frame-details.html?category=${categoryIndex}&subcategory=${subcategoryIndex}`;
  });
});
});
