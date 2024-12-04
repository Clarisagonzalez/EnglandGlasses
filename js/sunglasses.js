const sunglasses = [
    { src: 'images/sunglasses/sunglass1.jpg', title: 'Cool Sunglass 1', price: '$80', link: 'sunglass-details.html?sunglass=1' },
    { src: 'images/sunglasses/sunglass2.jpg', title: 'Cool Sunglass 2', price: '$90', link: 'sunglass-details.html?sunglass=2' },
    { src: 'images/sunglasses/sunglass3.jpg', title: 'Cool Sunglass 3', price: '$100', link: 'sunglass-details.html?sunglass=3' },
    { src: 'images/sunglasses/sunglass4.jpg', title: 'Cool Sunglass 4', price: '$110', link: 'sunglass-details.html?sunglass=4' },
    { src: 'images/sunglasses/sunglass5.jpg', title: 'Cool Sunglass 5', price: '$120', link: 'sunglass-details.html?sunglass=5' },
    { src: 'images/sunglasses/sunglass6.jpg', title: 'Cool Sunglass 6', price: '$130', link: 'sunglass-details.html?sunglass=6' },
    { src: 'images/sunglasses/sunglass7.jpg', title: 'Cool Sunglass 7', price: '$140', link: 'sunglass-details.html?sunglass=7' },
    { src: 'images/sunglasses/sunglass8.jpg', title: 'Cool Sunglass 8', price: '$150', link: 'sunglass-details.html?sunglass=8' },
    { src: 'images/sunglasses/sunglass9.jpg', title: 'Cool Sunglass 9', price: '$160', link: 'sunglass-details.html?sunglass=9' },
    { src: 'images/sunglasses/sunglass10.jpg', title: 'Cool Sunglass 10', price: '$170', link: 'sunglass-details.html?sunglass=10' },
    { src: 'images/sunglasses/sunglass11.jpg', title: 'Cool Sunglass 11', price: '$180', link: 'sunglass-details.html?sunglass=11' },
    { src: 'images/sunglasses/sunglass12.jpg', title: 'Cool Sunglass 12', price: '$190', link: 'sunglass-details.html?sunglass=12' },
    { src: 'images/sunglasses/sunglass13.jpg', title: 'Cool Sunglass 13', price: '$200', link: 'sunglass-details.html?sunglass=13' },
    { src: 'images/sunglasses/sunglass14.jpg', title: 'Cool Sunglass 14', price: '$210', link: 'sunglass-details.html?sunglass=14' },
    { src: 'images/sunglasses/sunglass15.jpg', title: 'Cool Sunglass 15', price: '$220', link: 'sunglass-details.html?sunglass=15' },
    { src: 'images/sunglasses/sunglass16.jpg', title: 'Cool Sunglass 16', price: '$230', link: 'sunglass-details.html?sunglass=16' },
    { src: 'images/sunglasses/sunglass17.jpg', title: 'Cool Sunglass 17', price: '$240', link: 'sunglass-details.html?sunglass=17' },
    { src: 'images/sunglasses/sunglass18.jpg', title: 'Cool Sunglass 18', price: '$250', link: 'sunglass-details.html?sunglass=18' },
    { src: 'images/sunglasses/sunglass19.jpg', title: 'Cool Sunglass 19', price: '$260', link: 'sunglass-details.html?sunglass=19' },
    { src: 'images/sunglasses/sunglass20.jpg', title: 'Cool Sunglass 20', price: '$270', link: 'sunglass-details.html?sunglass=20' }
];

// Select the container where the sunglasses will be inserted
const sunglassesContainer = document.querySelector('.sunglasses-container');

// Loop through the array of sunglasses and generate the HTML for each
sunglasses.forEach(sunglass => {
  const sunglassHTML = `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${sunglass.src}" class="card-img-top" alt="${sunglass.title}">
        <div class="card-body">
          <h5 class="card-title">${sunglass.title}</h5>
          <p class="card-text">${sunglass.price}</p>
          <a href="${sunglass.link}" class="btn btn-primary">Select</a>
        </div>
      </div>
    </div>
  `;

  // Insert the generated HTML into the container
  sunglassesContainer.innerHTML += sunglassHTML;
});
