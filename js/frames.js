const frames = [
  {
    title: 'Stylish Frame 1',
    price: '$120',
    colors: [
      { color: 'Black', src: 'images/glasses/A5.0/A5.0 Black.jpg' },
      { color: 'Burnt Orange', src: 'images/glasses/A5.0/A5.0 Burnt Orange.jpg' }
    ],
    link: 'frame-details.html?frame=1'
  },
  {
    title: 'Stylish Frame 2',
    price: '$130',
    colors: [
      { color: 'Black', src: 'images/glasses/A5.0/A5.1 Black.jpg' },
      { color: 'Brown', src: 'images/glasses/A5.0/A5.1 Tortoise.jpg' }
    ],
    link: 'frame-details.html?frame=2'
  },
  {
    title: 'Stylish Frame 3',
    price: '$140',
    colors: [
      { color: 'Black', src: 'images/glasses/A5.0/A5.2 Black & Red.jpg' },
      { color: 'Gray', src: 'images/glasses/A5.0/.jpg' }
    ],
    link: 'frame-details.html?frame=3'
  },
  {
    title: 'Stylish Frame 4',
    price: '$150',
    colors: [
      { color: 'Black', src: 'images/glasses/A5.0/A5.3 Black.jpg' },
      { color: 'Red', src: 'images/glasses/A5.0/A5.3 Blue.jpg' }
    ],
    link: 'frame-details.html?frame=4'
  },
  {
    title: 'Stylish Frame 5',
    price: '$160',
    colors: [
      { color: 'Black', src: 'images/glasses/A5.0/A5.4 Black.jpg' },
      { color: 'Silver', src: 'images/glasses/A5.0/A5.4 Pink.jpg' }
    ],
    link: 'frame-details.html?frame=5'
  },
  {
    title: 'Stylish Frame 6',
    price: '$170',
    colors: [
      { color: 'Black', src: 'images/glasses/A5.0/A5.5 Black & Clear Gradient.jpg' },
      { color: 'Gold', src: 'images/glasses/A5.0/A5.5 Blue & Clear Gradient.jpg' },
      { color: 'Gold', src: 'images/glasses/A5.0/A5.5 Pink & Clear Gradient.jpg' }
    ],
    link: 'frame-details.html?frame=6'
  },
  {
    title: 'Stylish Frame 7',
    price: '$180',
    colors: [
      { color: 'Black', src: 'images/glasses/A5.0/A5.6 Black & Clear.jpg' },
      { color: 'Blue', src: 'images/glasses/A5.0/A5.6 Blue & Clear.jpg' },
      { color: 'Blue', src: 'images/glasses/A5.0/A5.6 Pink & Clear.jpg' },
      { color: 'Blue', src: 'images/glasses/A5.0/A5.6 Tortoise.jpg' }
      
    ],
    link: 'frame-details.html?frame=7'
  },
  {
    title: 'Stylish Frame 8',
    price: '$190',
    colors: [
      { color: 'Black', src: 'images/glasses/A5.0/A5.8 Black & Blue.jpg' },
      { color: 'Pink', src: 'images/glasses/A5.0/A5.8 Black.jpg' },
      { color: 'Blue', src: 'images/glasses/A5.0/A5.8 Clear.jpg' }

    ],

    link: 'frame-details.html?frame=8'
  },
  {
    title: 'Stylish Frame 9',
    price: '$200',
    colors: [
      { color: 'Blue', src: 'images/glasses/A5.0/A5.9 Black.jpg' },
      { color: 'Blue', src: 'images/glasses/A5.0/A5.9 Blue.jpg' },
      { color: 'Blue', src: 'images/glasses/A5.0/A5.9 Clear.jpg' }
    ],
    link: 'frame-details.html?frame=9'
  },
  {
    title: 'Stylish Frame 10',
    price: '$210',
    colors: [
      { color: 'Blue', src: 'images/glasses/A5.0/A5.91 Black.jpg' },
      { color: 'Blue', src: 'images/glasses/A5.0/A5.91 Blue.jpg' },
      { color: 'Blue', src: 'images/glasses/A5.0/A5.91 Brown.jpg' }
    ],
    link: 'frame-details.html?frame=10'
  },
  {
    title: 'Stylish Frame 11',
    price: '$220',
    colors: [
      { color: 'Blue', src: 'images/glasses/A5.0/A5.92 Black & Brown.jpg' },
      
    ],
    link: 'frame-details.html?frame=11'
  },
  {
    title: 'Stylish Frame 12',
    price: '$230',
    colors: [
      { color: 'Blue', src: 'images/glasses/A5.0/A5.93 Black & Clear.jpg' },
      { color: 'Blue', src: 'images/glasses/A5.0/A5.93 Black & Pink.jpg' },
      { color: 'Blue', src: 'images/glasses/A5.0/A5.93 Brown & Pink.jpg' }
    ],
    link: 'frame-details.html?frame=12'
  },
  {
    title: 'Stylish Frame 13',
    price: '$240',
    colors: [
      { color: 'Blue', src: 'images/glasses/A5.0/A5.94 Black & Brown.jpg' },
      { color: 'Blue', src: 'images/glasses/A5.0/A5.94 Clear & Silver.jpg' },
      { color: 'Blue', src: 'images/glasses/A5.0/A5.94 Clear.jpg' }
    ],
    link: 'frame-details.html?frame=13'
  },
  {
    title: 'Stylish Frame 14',
    price: '$250',
    colors: [
      { color: 'Blue', src: 'images/glasses/A5.0/A5.95 Black & Silver.jpg' },
      { color: 'Blue', src: 'images/glasses/A5.0/A5.95 Black.jpg' },
      { color: 'Blue', src: 'images/glasses/A5.0/A5.95 Clear.jpg' }
    ],
    link: 'frame-details.html?frame=14'
  },
  {
    title: 'Stylish Frame 15',
    price: '$260',
    colors: [
      { color: 'Black', src: 'images/glasses/Academic/P2027 Black.jpg' },
      { color: 'Silver', src: 'images/frames/frame15_silver.jpg' }
    ],
    link: 'frame-details.html?frame=15'
  },
  {
    title: 'Stylish Frame 16',
    price: '$270',
    colors: [
      { color: 'Black', src: 'images/glasses/Academic/P2027 Red.jpg' },
      { color: 'Gold', src: 'images/frames/frame16_gold.jpg' }
    ],
    link: 'frame-details.html?frame=16'
  },
  {
    title: 'Stylish Frame 17',
    price: '$280',
    colors: [
      { color: 'Black', src: 'images/glasses/Academic/P2031 Black.jpg' },
      { color: 'Blue', src: 'images/frames/frame17_blue.jpg' }
    ],
    link: 'frame-details.html?frame=17'
  },
  {
    title: 'Stylish Frame 18',
    price: '$290',
    colors: [
      { color: 'Black', src: 'images/glasses/Academic/P2031 Grey.jpg' },
      { color: 'Purple', src: 'images/frames/frame18_purple.jpg' }
    ],
    link: 'frame-details.html?frame=18'
  },
  {
    title: 'Stylish Frame 19',
    price: '$300',
    colors: [
      { color: 'Black', src: 'images/frames/frame19_black.jpg' },
      { color: 'Green', src: 'images/frames/frame19_green.jpg' }
    ],
    link: 'frame-details.html?frame=19'
  },
  {
    title: 'Stylish Frame 20',
    price: '$230',
    colors: [
      { color: 'Black', src: 'images/frames/frame20_black.jpg' },
      { color: 'Pink', src: 'images/frames/frame20_pink.jpg' }
    ],
    link: 'frame-details.html?frame=20'
  }
];

// Select the container where the frames will be inserted
const framesContainer = document.querySelector('.frames-container');

// Loop through the array of frames and generate the HTML for each
frames.forEach(frame => {
  // Generate the HTML for the color options (radio buttons)
  const colorOptionsHTML = frame.colors.map(color => {
    return `
      <input type="radio" id="${frame.title}-${color.color}" name="color-${frame.title}" value="${color.color}" ${color.color === 'Black' ? 'checked' : ''}>
      <label for="${frame.title}-${color.color}">${color.color}</label>
    `;
  }).join('');

  // Generate the HTML for the frame (with dynamic color options)
  const frameHTML = `
    <div class="col-md-4 mb-4">
      <div class="card">
        <!-- Image that will update dynamically -->
        <img id="frame-image-${frame.title}" src="${frame.colors[0].src}" class="card-img-top" alt="${frame.title}">
        <div class="card-body">
          <h5 class="card-title">${frame.title}</h5>
          <p class="card-text">${frame.price}</p>

          <!-- Color selection options -->
          <div>
            <label>Choose Color:</label><br>
            ${colorOptionsHTML}
          </div>

          <a href="${frame.link}" class="btn btn-primary">Select</a>
        </div>
      </div>
    </div>
  `;

  // Insert the generated HTML into the container
  framesContainer.innerHTML += frameHTML;
});

// Add event listeners for color change
frames.forEach(frame => {
  frame.colors.forEach(color => {
    const colorRadio = document.querySelector(`#${frame.title}-${color.color}`);
    const imageElement = document.getElementById(`frame-image-${frame.title}`);
    
    // When a color is selected, update the image source
    colorRadio.addEventListener('change', function() {
      if (this.checked) {
        imageElement.src = color.src; // Update the image based on selected color
      }
    });
  });
});
