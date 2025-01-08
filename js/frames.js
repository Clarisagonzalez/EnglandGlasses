document.addEventListener('DOMContentLoaded', function () {
  console.log('Document is fully loaded.');
  // Define categories and subcategories
  const categories = [
    {
      category: 'A5.0',
      image: 'images/glasses/A5.0/A5.0 Burnt Orange.jpg',
      subcategories: [
        {
          title: 'A5.0',
          price: '$120',
          description: "Lightweight and durable TR-90 frame in Black or Burnt Orange. Unisex design with 54-17-142 dimensions, offering a sleek look from the A5.0+ line.",
          colors: [
            { color: 'Black', src: 'images/glasses/A5.0/A5.0 Black.jpg' },
            { color: 'Burnt Orange', src: 'images/glasses/A5.0/A5.0 Burnt Orange.jpg' },
          ],
        },
        {
          title: 'A5.1',
          price: '$130',
          description: "Stylish and durable TR90 frame in Black or Demi. Men’s and unisex design with 56-16-142 dimensions, part of the premium A5.0+ line.",
          colors: [
            { color: 'Black', src: 'images/glasses/A5.0/A5.1 Black.jpg' },
            { color: 'Brown', src: 'images/glasses/A5.0/A5.1 Tortoise.jpg' },
          ],
        },
        {
          title: 'A5.2',
          price: '$140',
          description: "Stylish and durable TR90 frame available in Black or Black/Red. Designed for kids and men, this frame combines comfort and quality as part of the premium A5.0+ line.",
          colors: [
            { color: 'Black & Red', src: 'images/glasses/A5.0/A5.2 Black & Red.jpg' },
          ],
        },
        {
          title: 'A5.3',
          price: '$130',
          description: "Modern and versatile TR90 frame available in Black or Blue. Perfect for unisex styling, this lightweight design from the premium A5.0+ line ensures comfort and durability. Size: 53-17-142.",
          colors: [
            {color: 'Black', src: 'images/glasses/A5.0/A5.3 Black.jpg'},
            {color: 'Blue', src: 'images/glasses/A5.0/A5.3 Blue.jpg'},
          ],
        },
        {
          title: 'A5.4',
          price: '$120',
          description: "Sleek TR90 frame in Black or Red/Clear, blending style and durability. Part of the premium A5.0+ line, this unisex design is perfect for women seeking lightweight comfort. Size: 52-19-142.",
          colors: [
            {color: 'Black', src: 'images/glasses/A5.0/A5.4 Black.jpg'},
            {color: 'Pink', src: 'images/glasses/A5.0/A5.4 Pink.jpg'},
          ],
        },
        {
          title: 'A5.5',
          price: '$140',
          description: "Versatile TR90 frame available in Black/Clear, Blue/Clear, and Red/Clear. Designed for unisex appeal, this lightweight A5.0+ modelcombines modern style with premium comfort. Size: 51-17-142.",
          colors: [
            {color: 'Black & Clear', src: 'images/glasses/A5.0/A5.5 Black & Clear Gradient.jpg'},
            {color: 'Blue & Clear', src: 'images/glasses/A5.0/A5.5 Blue & Clear Gradient.jpg'},
            {color: 'Pink & Clear', src: 'images/glasses/A5.0/A5.5 Pink & Clear Gradient.jpg'},
          ],
        },
        {
          title: 'A5.6',
          price: '$130',
          description: "Stylish TR90 frame offered in Black/Demi and Red/Clear. Perfect for unisex wearers, this A5.0+ model blends durability with lightweight -comfort. Size: 52-19-142.",
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
          description: "Versatile TR90 frame available in Black, Black/Blue, and Clear. Designed for men, women, and unisex wearers, this A5.0+ model combine durability with sleek style. Size: 53-17-142.",
          colors: [
            {color: 'Black & Blue', src: 'images/glasses/A5.0/A5.8 Black & Blue.jpg'},
            {color: 'Black', src: 'images/glasses/A5.0/A5.8 Black.jpg'},
            {color: 'Clear', src: 'images/glasses/A5.0/A5.8 Clear.jpg'},
          ],
        },
        {
          title: 'A5.9',
          price: '$120',
          description: "A sleek and durable TR90 frame in Black, Blue, and Clear, designed for kids and unisex wearers. Featuring a comfortable fit, the A5.0+ model offers long-lasting quality. Size: 52-15-142.",
          colors: [
            {color: 'Black', src: 'images/glasses/A5.0/A5.9 Black.jpg'},
            {color: 'Blue', src: 'images/glasses/A5.0/A5.9 Blue.jpg'},
            {color: 'Clear', src: 'images/glasses/A5.0/A5.9 Clear.jpg'},
          ],
        },
        {
          title: 'A5.91',
          price: '$130',
          description: "Stylish and durable TR90 frame available in Black, Blue, and colors. Designed for unisex wearers, this A5.0+ model provides a perfect fit and lasting comfort. Size: 53-16-142.",
          colors: [
            {color: 'Black', src: 'images/glasses/A5.0/A5.91 Black.jpg'},
            {color: 'Blue', src: 'images/glasses/A5.0/A5.91 Blue.jpg'},
            {color: 'Brown', src: 'images/glasses/A5.0/A5.91 Brown.jpg'},
          ],
        },
        {
          title: 'A5.92',
          price: '$130',
          description: "Stylish TR90 frame available in Black and Brown, offering a perfect fit for men, women, and unisex wearers. This A5.0+ model is designed for comfort and durability, with a lightweight yet sturdy construction. Size: 54-15-142.",
          colors: [
            {color: 'Black & Brown', src: 'images/glasses/A5.0/A5.92 Black & Brown.jpg'},
          ],
        },
        {
          title: 'A5.93',
          price: '$130',
          description:  "Stylish and durable TR90 frame available in Black, Black/Brown, and Black/Clear. Designed for men and unisex wearers, offering a comfortable fit and long-lasting wear. Size: 51-18-150.",
          colors: [
            {color: 'Black & Clear', src: 'images/glasses/A5.0/A5.93 Black & Clear.jpg'},
            {color: 'Black & Pink', src: 'images/glasses/A5.0/A5.93 Black & Pink.jpg'},
            {color: 'Brown & Pink', src: 'images/glasses/A5.0/A5.93 Brown & Pink.jpg'},
          ],
        },
        {
          title: 'A5.94',
          price: '$130',
          description: "Stylish and versatile TR90 frame available in Black/Brown, Clear, and Grey. Designed for unisex wearers, offering durability, lightweight comfort, and a modern look. Size: 54-16-150.",
          colors: [
            {color: 'Black & Brown', src: 'images/glasses/A5.0/A5.94 Black & Brown.jpg'},
            {color: 'Clear & Silver', src: 'images/glasses/A5.0/A5.94 Clear & Silver.jpg'},
            {color: 'Clear', src: 'images/glasses/A5.0/A5.94 Clear.jpg'}
          ],
        },
        {
          title: 'A5.95',
          price: '$130',
          description: "Trendy TR90 frame available in Black/Silver, Black, and Grey. Ideal for unisex wearers, combining durability and lightweight comfort for everyday wear. Size: 56-17-150.",
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
      image: 'images/glasses/Academic/P2027 Red.jpg',
      subcategories: [
        {
          title: 'P2027',
          price: '$130',
          description:"Modern plastic injected frame in Black and Red, designed for unisex wearers. The Academic 2021-8045 model offers a sleek look with a comfortable fit. Size: 50-17-135.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P2027 Black.jpg'},
            {color: 'Red', src: 'images/glasses/Academic/P2027 Red.jpg'},
          ],
        },
        {
          title: 'P2031',
          price: '$120',
          description: "Stylish plastic injected frame available in Black and Grey, designed for unisex wearers. The Academic P2000-P8000 model offers both durability and comfort. Size: 52-18-147.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P2031 Black.jpg'},
            {color: 'Grey', src: 'images/glasses/Academic/P2031 Grey.jpg'},
          ],
        },
        {
          title: 'P7008',
          price: '$130',
          description: "Elegant brown frame designed for a sleek and stylish look. Ideal for unisex wearers, this frame offers comfort and a great fit. Size: 48-15-135.",
          colors: [
            {color: 'Brown', src: 'images/glasses/Academic/P7008 Brown.jpg'},
          ],
        },
        {
          title: 'P7015',
          price: '$130',
          description:  "Classic black frame designed for men, crafted with durable plastic-injected material for long-lasting use. Its sleek and versatile design ensures comfort and a perfect fit for daily wear. Size: 53-19-145.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P7015 Black.jpg'},
          ],
        },
        {
          title: 'P8005',
          price: '$130',
          description: "Versatile unisex frame available in Black, Blue, and Grey colors,featuring a durable plastic-injected construction for long-lasting wear. Ideal for everyday use, this frame offers a comfortable fit. Size: 54-16-145.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8005-C1 Black.jpg'},
            {color: 'Blue', src: 'images/glasses/Academic/P8005-C2 Blue.jpg'},
            {color: 'Grey', src: 'images/glasses/Academic/P8005-C3 Grey.jpg'},
          ],
        },
        {
          title: 'P8010',
          price: '$130',
          description:  "Stylish men's frame in Black/Blue and Demi colors, made from durable plastic-injected material. Perfect for everyday wear, offering both comfort and durability. Size: 53-15-140.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8010 Black & Blue.jpg'},
            {color: 'Demi', src: 'images/glasses/Academic/P8010 Demi.jpg'},
          ],
        },
        {
          title: 'P8015',
          price: '$130',
          description: "Stylish unisex frame in Black and Pink, made with durable plastic-injected material for a comfortable and secure fit. Ideal for everyday wear. Size: 52-16-138.",
          colors: [
            {color: 'Pink', src: 'images/glasses/Academic/P8015 Pink.jpg'},
            {color: 'Black', src: 'images/glasses/Academic/P8015-Black.jpg'},
          ],
        },
        {
          title: 'P8016',
          price: '$130',
          description: "Available in Black, Peach, and Blue, these unisex frames feature a plastic injected design for durability and comfort. With a size of 54-16-140, they combine style and functionality for any occasion.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8016 Black.jpg'},
            {color: 'Blue', src: 'images/glasses/Academic/P8016 Blue.jpg'},
            {color: 'Peach', src: 'images/glasses/Academic/P8016 Peach.jpg'},
          ],
        },
        {
          title: 'P8021',
          price: '$130',
          description: "These unisex frames come in Black, Clear, and Red, offering a sleek plastic injected design. The 53-16-145 size ensures a perfect fit while delivering a modern, versatile look.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8021 Black.jpg'},
            {color: 'Clear', src: 'images/glasses/Academic/P8021 Clear.jpg'},
            {color: 'Wine', src: 'images/glasses/Academic/P8021 Wine.jpg'},
          ],
        },
        {
          title: 'P8026',
          price: '$130',
          description: "These unisex frames come in Black/Clear, Pink, and Teal, offering a stylish and durable plastic injected design. With a size of 53-16-140, they provide a comfortable and modern fit.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8026 Black.jpg'},
            {color: 'Pink', src: 'images/glasses/Academic/P8026 Pink.jpg'},
            {color: 'Teal', src: 'images/glasses/Academic/P8026 Teal.jpg'},
          ],
        },
        {
          title: 'P8029',
          price: '$130',
          description: "Available in Black and Blue, these unisex frames in size 56-17-140 are made with a durable plastic injected material, perfect for a versatile and sleek look.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8029 Black.jpg'},
            {color: 'Blue', src: 'images/glasses/Academic/P8029 Blue.jpg'},
      
          ],
        },{
          title: 'P8032',
          price: '$130',
          description: "These stylish frames in Black and Black/Wine are designed for women. The 53-14-145 size offers a comfortable, tailored fit with a durable plastic injected material for everyday wear.",
          colors: [
            {color: 'Hot Pink', src: 'images/glasses/Academic/P8032 Hotpink.jpg'},
      
          ],
        },
        {
          title: 'P8034',
          price: '$130',
          description: "Versatile unisex frame in Black, Brown/Blue, Clear, and Pink, made from durable plastic-injected material for lasting comfort. Perfect for everyday use. Size: 53-16-142.",
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
          description: "hese men’s frames in Black/Clear, Brown/Clear, and Clear feature a sleek plastic injected design, size 56-15-145, offering both durability and style for everyday wear.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8036 Black.jpg'},
            {color: 'Brown', src: 'images/glasses/Academic/P8036 Brown.jpg'},
            {color: 'Clear', src: 'images/glasses/Academic/P8036 Clear.jpg'},
          ],
        },
        {
          title: 'P8037',
          price: '$130',
          description: "Available in Black and Wine, these unisex frames in size 47-20-145 are made with plastic injected material for a strong yet stylish look.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8037 Black.jpg'},
            {color: 'Wine', src: 'images/glasses/Academic/P8037 Wine.jpg'},
          ],
        },
        {
          title: 'P8038',
          price: '$130',
          description: "In Black and Black/Blue, these men’s frames with a size of 56-17-145 are crafted from durable plastic injected material, offering a comfortable and contemporary fit.",
          colors: [
            {color: 'Black/Blue', src: 'images/glasses/Academic/P8038 Black-Blue.jpg'},
            {color: 'Black', src: 'images/glasses/Academic/P8038 Black.jpg'},
          ],
        },
        {
          title: 'P8040',
          price: '$130',
          description: "These men's frames in Black/Clear and Blue come in size 56-14-143, offering a clean, modern look with durable plastic injected material.",
          colors: [
            {color: 'Blue', src: 'images/glasses/Academic/P8040 Blue.jpg'},
            {color: 'Brown', src: 'images/glasses/Academic/P8040 Brown.jpg'},
    
          ],
        },
        {
          title: 'P8041',
          price: '$130',
          description: "Available in Black/Clear and Brown, these frames in size 52-19-145 are crafted with plastic injected material, providing both comfort and style.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8041 Black.jpg'},
            {color: 'Brown', src: 'images/glasses/Academic/P8041 Brown.jpg'},
          ],
        },
        {
          title: 'P8042',
          price: '$130',
          description: "These men’s frames in Black, size 53-16-147, are made with TR-90 material for a lightweight, flexible, and durable fit.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8042 Black.jpg'},
          
          ],
        },
        {
          title: 'P8045',
          price: '$130',
          description: "These men’s frames in Brown/Clear, size 56-18-147, are crafted from durable plastic injected material, offering both style and comfort.",
          colors: [
            {color: 'Brown', src: 'images/glasses/Academic/P8045 Brown.jpg'},
          
          ],
        },
        {
          title: 'P8046',
          price: '$130',
          description: "Available in Black, Brown, and Gun, these frames come in size 55-19-145, providing a sleek, versatile design in a durable plastic injected build.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8046 Black.jpg'},
            {color: 'Brown', src: 'images/glasses/Academic/P8046 Brown.jpg'},
            {color: 'Grey', src: 'images/glasses/Academic/P8046 Grey.jpg'},
          ],
        },
        {
          title: 'P8047',
          price: '$130',
          description: "These women’s frames, available in Blue, Pink, and Wine, come in size 56-16-142 and are made from high-quality plastic injected material for lasting comfort.",
          colors: [
            {color: 'Blue', src: 'images/glasses/Academic/P8047 Blue.jpg'},
            {color: 'Pink', src: 'images/glasses/Academic/P8047 Pink.jpg'},
            {color: 'Wine', src: 'images/glasses/Academic/P8047 Wine.jpg'},
          ],
        },
        {
          title: 'P8048',
          price: '$130',
          description: "These women’s frames, available in Black, Pink, and Wine, come in size 54-17-142 and are made from durable plastic injected material for a comfortable fit.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8048 Black.jpg'},
            {color: 'Pink', src: 'images/glasses/Academic/P8048 Pink.jpg'},
            {color: 'Wine', src: 'images/glasses/Academic/P8048 Wine.jpg'},
          ],
        },
        {
          title: 'P8049',
          price: '$130',
          description: "Available in Black, Clear, and Wine, these frames come in size 55-17-143, offering a stylish, versatile design in high-quality plastic injected material.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8049 Black.jpg'},
            {color: 'Clear', src: 'images/glasses/Academic/P8049 Clear.jpg'},
            {color: 'Wine', src: 'images/glasses/Academic/P8049 Wine.jpg'},
          ],
        },{
          title: 'P8050',
          price: '$130',
          description: "These frames in Black, Pink, and Wine, size 53-17-142, are designed for women seeking both comfort and fashion with their plastic injected construction.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8050 Black.jpg'},
            {color: 'Pink', src: 'images/glasses/Academic/P8050 Pink.jpg'},
            {color: 'Wine', src: 'images/glasses/Academic/P8050 Wine.jpg'},
          ],
        },{
          title: 'P8052',
          price: '$130',
          description: "These stylish frames come in Black and Wine, size 57-17-145, made from durable plastic injected material for a secure and comfortable fit.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8052 Black.jpg'},
            {color: 'Wine', src: 'images/glasses/Academic/P8052 Wine.jpg'},
          ],
        },{
          title: 'P8053',
          price: '$130',
          description: "Available in Black/Clear, size 57-17-145, these frames for men feature a modern design and are made with high-quality plastic injected material for long-lasting use.",
          colors: [
            {color: 'Black', src: 'images/glasses/Academic/P8053 Black.jpg'},
          ],
        },
        {
          title: 'P8055',
          price: '$130',
          description: "These frames in Black, Brown, and Grey, size 60-17-145, combine durability and comfort, crafted from plastic injected material for a sleek and stylish look.",
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
          image: 'images/glasses/CEO/CEO Chloe Silver.jpg',  
          subcategories: [
            {
              title: 'CEO Abraham',
              price: '$150',
              description: "Elevate your style with the CEO Line frames, crafted with a durable gold-plated finish for a timeless, elegant look. Available in Gold, Grey, and White Gold, these versatile frames suit any occasion. With dimensions of 55-17-145, they offer both comfort and sophistication.",
              colors: [
                { color: 'Gold', src: 'images/glasses/CEO/CEO Abraham Gold.jpg' },
                { color: 'White Gold', src: 'images/glasses/CEO/CEO Abraham Silver.jpg' },
                { color: 'Grey', src: 'images/glasses/CEO/CEO Abraham Grey.jpg' },
              ],
            },
            {
              title: 'CEO Andrew',
              price: '$160',
              description: "Make a statement with the CEO Line frames, designed for both men and unisex wearers. Crafted with Monel dipped in gold and a luxurious white gold finish, these frames are available in Gold, Gunmetal, and White Gold. With dimensions of 56-18-145, they offer a perfect blend of style and durability for any occasion.",
              colors: [
                { color: 'Gold', src: 'images/glasses/CEO/CEO Andrew Gold.jpg' },
                { color: 'Grey', src: 'images/glasses/CEO/CEO Andrew Grey.jpg' },
                { color: 'Silver', src: 'images/glasses/CEO/CEO Andrew Silver.jpg' },
              ],
            },
            {
              title: 'CEO Chloe',
              price: '$170',
              description: "The CEO Line frames combine elegance and versatility with a gold-plated finish. Available in two stunning color combinations—Gold/Silver and Silver/Gold—these unisex frames are designed to make a bold statement. With dimensions of 55-17-140, they offer a sophisticated look suitable for any occasion.",
              colors: [
                { color: 'Gold', src: 'images/glasses/CEO/CEO Chloe Gold.jpg' },
                { color: 'Silver', src: 'images/glasses/CEO/CEO Chloe Silver.jpg' },
              
              ],
            },
            {
              title: 'CEO Esther',
              price: '$170',
              description: "The CEO Line frames feature a refined design with a dipped-in-white-gold and Monel-dipped-in-gold finish, ensuring both elegance and durability. Available in Burgundy, Pink, and White Gold, these frames cater to both unisex and women’s styles. With a size of 50-16-140, they offer a chic and timeless look for any occasion.",
              colors: [
                { color: 'Burgundy', src: 'images/glasses/CEO/CEO Esther Burgundy.jpg' },
                { color: 'Pink', src: 'images/glasses/CEO/CEO Esther Pink.jpg' },
                { color: 'White Gold', src: 'images/glasses/CEO/CEO Esther Silver.jpg' },
              ],
            },
            {
              title: 'CEO Ezra',
              price: '$170',
              description:"The CEO Line frames offer a sleek and stylish design, crafted with a dipped-in-white-gold and Monel-dipped-in-gold finish for added sophistication. Available in Gold, Grey, and White Gold, these frames are perfect for both unisex wear. With a size of 54-18-145, they provide a refined look that suits any occasion.",
              colors: [
                { color: 'Gold', src: 'images/glasses/CEO/CEO Ezra Gold.jpg' },
                { color: 'Grey', src: 'images/glasses/CEO/CEO Ezra Grey.jpg' },
                { color: 'White Gold', src: 'images/glasses/CEO/CEO Ezra Silver.jpg' },
              ],
            },
            {
              title: 'CEO Job',
              price: '$170',
              description: "The CEO Line frames are designed for a sophisticated, timeless look. Crafted with a dipped-in-white-gold and Monel-dipped-in-gold finish, these frames offer durability and elegance. Available in Gold, Grey, and White Gold, they are perfect for both men and women. With a size of 54-17-145, these frames provide a versatile and stylish option for any occasion.",
              colors: [
                { color: 'Gold', src: 'images/glasses/CEO/CEO Job Gold.jpg' },
                { color: 'Grey', src: 'images/glasses/CEO/CEO Job Grey.jpg' },
                { color: 'White Gold', src: 'images/glasses/CEO/CEO Job Silver.jpg' },
              ],
            },
            {
              title: 'CEO Jude',
              price: '$170',
              description:"The CEO Line frames are the epitome of elegance and style. Featuring a dipped-in-white-gold and Monel-dipped-in-gold finish, these frames offer both luxury and durability. Available in Gold, Gunmetal, and White Gold, they are designed for unisex wear, making them a versatile addition to any wardrobe. With a size of 55-18-145, these frames ensure a comfortable fit while elevating your overall look.",
              colors: [
                { color: 'Gold', src: 'images/glasses/CEO/CEO Jude Gold.jpg' },
                { color: 'Grey', src: 'images/glasses/CEO/CEO Jude Grey.jpg' },
                { color: 'White Gold', src: 'images/glasses/CEO/CEO Jude Silver.jpg' },
              ],
            },
          ],
        },
      ];

 // Select container for frames
 const framesContainer = document.querySelector('.frames-container');
 console.log('Frames container selected:', framesContainer);
 if (!framesContainer) {
   console.error('Frames container not found in the DOM!');
   return; // Exit if framesContainer is not found
 }

 categories.forEach((category, categoryIndex) => {
   // Generate category HTML
   const categoryHTML = `
     <div class="category mb-4 col-lg-4 col-md-6">
       <div class="category-card">
       <!-- Image added here -->
      <img src="${category.image}" alt="${category.category} image" class="category-image mb-3" />
         <button class="frame-btn w-100 text-left category-btn" data-category="${categoryIndex}">
           <h4 class="category-title">${category.category}</h4>
         </button>
         <!-- Subcategories container (Initially hidden) -->
         <div class="subcategories collapse mt-3" id="category-${categoryIndex}">
           <!-- Subcategories will be dynamically added here -->
         </div>
       </div>
     </div>
   `;

   // Insert category HTML
   framesContainer.insertAdjacentHTML('beforeend', categoryHTML);

   // Subcategories container for the current category
   const subcategoriesContainer = document.querySelector(`#category-${categoryIndex}`);
   if (!subcategoriesContainer) {
     console.error(`Subcategories container for category-${categoryIndex} not found!`);
     return;
   }

   // Generate HTML for each subcategory
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

     // Insert subcategory HTML inside the subcategories container
     subcategoriesContainer.insertAdjacentHTML('beforeend', subcategoryHTML);
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

     // Toggle visibility of the subcategories for this category
     const categoryId = this.dataset.category;
     const subcategories = document.getElementById(`category-${categoryId}`);

     // Hide all other subcategories
     document.querySelectorAll('.subcategories').forEach((sub) => {
       if (sub !== subcategories) {
         sub.classList.remove('show');
         sub.classList.add('collapse'); // Collapse other categories
       }
     });

     // Toggle current category's subcategory visibility
     if (subcategories) {
       const isCollapsed = subcategories.classList.contains('collapse');
       subcategories.classList.toggle('collapse', !isCollapsed);
       subcategories.classList.toggle('show', isCollapsed);
     }
   });
 });
 // Add event listeners for color selection change
document.querySelectorAll('input[type="radio"][name^="color-"]').forEach((radio) => {
  radio.addEventListener('change', function () {
    const categoryId = this.name.split('-')[1]; // Extract category index
    const subcategoryId = this.name.split('-')[2]; // Extract subcategory index
    const selectedColorValue = this.value;

    const category = categories[categoryId];
    const subcategory = category.subcategories[subcategoryId];

    // Find the corresponding color object from the subcategory
    const selectedColor = subcategory.colors.find(color => color.color === selectedColorValue);

    if (selectedColor) {
      // Change the image based on the selected color
      const imageElement = document.querySelector(`#frame-image-${categoryId}-${subcategoryId}`);
      if (imageElement) {
        imageElement.src = selectedColor.src; // Update the image source
      }
    }
  });
});

document.querySelectorAll('.view-details-btn').forEach((button) => {
  button.addEventListener('click', function (event) {
    event.preventDefault();

    const categoryIndex = button.getAttribute('data-category');
    const subcategoryIndex = button.getAttribute('data-subcategory');

    const category = categories[categoryIndex];
    if (!category) {
      alert(`Category with index ${categoryIndex} not found.`);
      return;
    }

    const subcategory = category.subcategories[subcategoryIndex];
    if (!subcategory) {
      alert(`Subcategory with index ${subcategoryIndex} not found in category ${categoryIndex}.`);
      return;
    }

    const selectedColorInput = document.querySelector(
      `input[name="color-${categoryIndex}-${subcategoryIndex}"]:checked`
    );

    if (!selectedColorInput) {
      alert('Incomplete product information. Please select a color before proceeding.');
      return;
    }

    const selectedColorValue = selectedColorInput.value;
    const selectedColor = subcategory.colors.find(color => color.color === selectedColorValue);
    if (!selectedColor) {
      alert('Selected color not found.');
      return;
    }

    const selectedFrame = {
      categoryIndex,
      subcategoryIndex,
      selectedColor: selectedColor.color,
    };

    try {
      const storedFrames = JSON.parse(localStorage.getItem('frames')) || [];
      storedFrames.push(selectedFrame);
      localStorage.setItem('frames', JSON.stringify(storedFrames));
    } catch (e) {
      alert('Error storing data in localStorage. Please try again.');
      return;
    }

    window.location.href = `frame-details.html?category=${categoryIndex}&subcategory=${subcategoryIndex}&color=${selectedColor.color}`;
  });
});
});