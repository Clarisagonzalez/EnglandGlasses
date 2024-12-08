const frames = [
  {
    title: 'Stylish Frame 1',
    price: '$120',
    colors: [
      { color: 'Black', src: 'images/glasses/A5.0/A5.0 Black.jpg' },
      { color: 'A5.0 Burnt Orange', src: 'images/glasses/A5.0/A5.0 Burnt Orange.jpg' }
    ],
    link: 'frame-details.html?frame=1'
  },
  {
    title: 'Stylish Frame 2',
    price: '$130',
    colors: [
      { color: 'Black', src: 'images/frames/frame2_black.jpg' },
      { color: 'Brown', src: 'images/frames/frame2_brown.jpg' }
    ],
    link: 'frame-details.html?frame=2'
  },
  {
    title: 'Stylish Frame 3',
    price: '$140',
    colors: [
      { color: 'Black', src: 'images/frames/frame3_black.jpg' },
      { color: 'Gray', src: 'images/frames/frame3_gray.jpg' }
    ],
    link: 'frame-details.html?frame=3'
  },
  {
    title: 'Stylish Frame 4',
    price: '$150',
    colors: [
      { color: 'Black', src: 'images/frames/frame4_black.jpg' },
      { color: 'Red', src: 'images/frames/frame4_red.jpg' }
    ],
    link: 'frame-details.html?frame=4'
  },
  {
    title: 'Stylish Frame 5',
    price: '$160',
    colors: [
      { color: 'Black', src: 'images/frames/frame5_black.jpg' },
      { color: 'Silver', src: 'images/frames/frame5_silver.jpg' }
    ],
    link: 'frame-details.html?frame=5'
  },
  {
    title: 'Stylish Frame 6',
    price: '$170',
    colors: [
      { color: 'Black', src: 'images/frames/frame6_black.jpg' },
      { color: 'Gold', src: 'images/frames/frame6_gold.jpg' }
    ],
    link: 'frame-details.html?frame=6'
  },
  {
    title: 'Stylish Frame 7',
    price: '$180',
    colors: [
      { color: 'Black', src: 'images/frames/frame7_black.jpg' },
      { color: 'Blue', src: 'images/frames/frame7_blue.jpg' }
    ],
    link: 'frame-details.html?frame=7'
  },
  {
    title: 'Stylish Frame 8',
    price: '$190',
    colors: [
      { color: 'Black', src: 'images/frames/frame8_black.jpg' },
      { color: 'Pink', src: 'images/frames/frame8_pink.jpg' }
    ],
    link: 'frame-details.html?frame=8'
  },
  {
    title: 'Stylish Frame 9',
    price: '$200',
    colors: [
      { color: 'Black', src: 'images/frames/frame9_black.jpg' },
      { color: 'Yellow', src: 'images/frames/frame9_yellow.jpg' }
    ],
    link: 'frame-details.html?frame=9'
  },
  {
    title: 'Stylish Frame 10',
    price: '$210',
    colors: [
      { color: 'Black', src: 'images/frames/frame10_black.jpg' },
      { color: 'Purple', src: 'images/frames/frame10_purple.jpg' }
    ],
    link: 'frame-details.html?frame=10'
  },
  {
    title: 'Stylish Frame 11',
    price: '$220',
    colors: [
      { color: 'Black', src: 'images/frames/frame11_black.jpg' },
      { color: 'Green', src: 'images/frames/frame11_green.jpg' }
    ],
    link: 'frame-details.html?frame=11'
  },
  {
    title: 'Stylish Frame 12',
    price: '$230',
    colors: [
      { color: 'Black', src: 'images/frames/frame12_black.jpg' },
      { color: 'Red', src: 'images/frames/frame12_red.jpg' }
    ],
    link: 'frame-details.html?frame=12'
  },
  {
    title: 'Stylish Frame 13',
    price: '$240',
    colors: [
      { color: 'Black', src: 'images/frames/frame13_black.jpg' },
      { color: 'Orange', src: 'images/frames/frame13_orange.jpg' }
    ],
    link: 'frame-details.html?frame=13'
  },
  {
    title: 'Stylish Frame 14',
    price: '$250',
    colors: [
      { color: 'Black', src: 'images/frames/frame14_black.jpg' },
      { color: 'Brown', src: 'images/frames/frame14_brown.jpg' }
    ],
    link: 'frame-details.html?frame=14'
  },
  {
    title: 'Stylish Frame 15',
    price: '$260',
    colors: [
      { color: 'Black', src: 'images/frames/frame15_black.jpg' },
      { color: 'Silver', src: 'images/frames/frame15_silver.jpg' }
    ],
    link: 'frame-details.html?frame=15'
  },
  {
    title: 'Stylish Frame 16',
    price: '$270',
    colors: [
      { color: 'Black', src: 'images/frames/frame16_black.jpg' },
      { color: 'Gold', src: 'images/frames/frame16_gold.jpg' }
    ],
    link: 'frame-details.html?frame=16'
  },
  {
    title: 'Stylish Frame 17',
    price: '$280',
    colors: [
      { color: 'Black', src: 'images/frames/frame17_black.jpg' },
      { color: 'Blue', src: 'images/frames/frame17_blue.jpg' }
    ],
    link: 'frame-details.html?frame=17'
  },
  {
    title: 'Stylish Frame 18',
    price: '$290',
    colors: [
      { color: 'Black', src: 'images/frames/frame18_black.jpg' },
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
