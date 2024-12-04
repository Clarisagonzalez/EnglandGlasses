const frames = [
    { src: 'images/frames/frame1.jpg', title: 'Stylish Frame 1', price: '$120', link: 'frame-details.html?frame=1' },
    { src: 'images/frames/frame2.jpg', title: 'Stylish Frame 2', price: '$130', link: 'frame-details.html?frame=2' },
    { src: 'images/frames/frame3.jpg', title: 'Stylish Frame 3', price: '$140', link: 'frame-details.html?frame=3' },
    { src: 'images/frames/frame4.jpg', title: 'Stylish Frame 4', price: '$150', link: 'frame-details.html?frame=4' },
  { src: 'images/frames/frame5.jpg', title: 'Stylish Frame 5', price: '$160', link: 'frame-details.html?frame=5' },
  { src: 'images/frames/frame6.jpg', title: 'Stylish Frame 6', price: '$170', link: 'frame-details.html?frame=6' },
  { src: 'images/frames/frame7.jpg', title: 'Stylish Frame 7', price: '$180', link: 'frame-details.html?frame=7' },
  { src: 'images/frames/frame8.jpg', title: 'Stylish Frame 8', price: '$190', link: 'frame-details.html?frame=8' },
  { src: 'images/frames/frame9.jpg', title: 'Stylish Frame 9', price: '$200', link: 'frame-details.html?frame=9' },
  { src: 'images/frames/frame10.jpg', title: 'Stylish Frame 10', price: '$210', link: 'frame-details.html?frame=10' },
  { src: 'images/frames/frame11.jpg', title: 'Stylish Frame 11', price: '$220', link: 'frame-details.html?frame=11' },
  { src: 'images/frames/frame12.jpg', title: 'Stylish Frame 12', price: '$230', link: 'frame-details.html?frame=12' },
  { src: 'images/frames/frame13.jpg', title: 'Stylish Frame 13', price: '$240', link: 'frame-details.html?frame=13' },
  { src: 'images/frames/frame14.jpg', title: 'Stylish Frame 14', price: '$250', link: 'frame-details.html?frame=14' },
  { src: 'images/frames/frame15.jpg', title: 'Stylish Frame 15', price: '$260', link: 'frame-details.html?frame=15' },
  { src: 'images/frames/frame16.jpg', title: 'Stylish Frame 16', price: '$270', link: 'frame-details.html?frame=16' },
  { src: 'images/frames/frame17.jpg', title: 'Stylish Frame 17', price: '$280', link: 'frame-details.html?frame=17' },
  { src: 'images/frames/frame18.jpg', title: 'Stylish Frame 18', price: '$290', link: 'frame-details.html?frame=18' },
  { src: 'images/frames/frame19.jpg', title: 'Stylish Frame 19', price: '$300', link: 'frame-details.html?frame=19' },
  { src: 'images/frames/frame20.jpg', title: 'Stylish Frame 20', price: '$230', link: 'frame-details.html?frame=20' }
  ];
  
  // Select the container where the frames will be inserted
const framesContainer = document.querySelector('.frames-container');

// Loop through the array of frames and generate the HTML for each
frames.forEach(frame => {
  const frameHTML = `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${frame.src}" class="card-img-top" alt="${frame.title}">
        <div class="card-body">
          <h5 class="card-title">${frame.title}</h5>
          <p class="card-text">${frame.price}</p>
          <a href="${frame.link}" class="btn btn-primary">Select</a>
        </div>
      </div>
    </div>
  `;

  // Insert the generated HTML into the container
  framesContainer.innerHTML += frameHTML;
});
