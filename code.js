function FragranceProduct(name, short, size, price, accent) {
  this.name = name;
  this.short = short;
  this.size = size;
  this.price = price;
  this.accent = accent;
}

const productImages = [
  'stonger with you 2 medium.webp',
  'stonger with you 2 small.webp',
  'stonger with you small.webp',
  'stronger with you 1 medium.webp',
  'stronger with you 1 small.webp',
  'stronger with you medium.webp'
];

const products = [
  new FragranceProduct('Noir Elixir', 'Noir', '100ml', 220000, ['#d8b08b', '#6a3a2a']),
  new FragranceProduct('Velvet Bloom', 'Velvet', '120ml', 245000, ['#d1a48f', '#8d5a42']),
  new FragranceProduct('Amber Mist', 'Amber', '100ml', 210000, ['#d6b17a', '#71512d']),
  new FragranceProduct('Saffron Rush', 'Saffron', '90ml', 198000, ['#d59d5c', '#7d4221']),
  new FragranceProduct('Midnight Silk', 'Midnight', '120ml', 260000, ['#a88fb1', '#473454']),
  new FragranceProduct('Golden Hour', 'Golden', '100ml', 215000, ['#e4c06a', '#8a6227']),
  new FragranceProduct('Cedar Muse', 'Cedar', '110ml', 230000, ['#8a6a4d', '#36261a']),
  new FragranceProduct('Rose Veil', 'Rose', '100ml', 205000, ['#d8a7ad', '#75434a']),
  new FragranceProduct('Desert Bloom', 'Desert', '120ml', 248000, ['#d5a968', '#755835']),
  new FragranceProduct('Night Reserve', 'Night', '100ml', 238000, ['#5f4d64', '#221a2a']),
  new FragranceProduct('Pearl Echo', 'Pearl', '90ml', 200000, ['#d7d3cf', '#76726e']),
  new FragranceProduct('Wild Oud', 'Oud', '120ml', 270000, ['#7a5647', '#251914']),
  new FragranceProduct('Citrus Aura', 'Citrus', '100ml', 190000, ['#d4c96b', '#6d6529']),
  new FragranceProduct('Velvet Cedar', 'Cedar', '110ml', 240000, ['#9c7d5a', '#433020']),
  new FragranceProduct('Royal Bloom', 'Royal', '120ml', 255000, ['#cf9bcc', '#68425f']),
  new FragranceProduct('Woodstone', 'Wood', '100ml', 225000, ['#9d7c63', '#3d2a20']),
  new FragranceProduct('Summer Drift', 'Drift', '90ml', 185000, ['#c6d7a9', '#596c3b']),
  new FragranceProduct('Luna Silk', 'Luna', '110ml', 235000, ['#bfa8d6', '#54436a']),
  new FragranceProduct('Amber Luxe', 'Luxe', '100ml', 245000, ['#d3a777', '#7a5133']),
  new FragranceProduct('Black Orchid', 'Orchid', '120ml', 265000, ['#a2758e', '#3f2737'])
];

const productGrid = document.querySelector('#product-grid');

if (productGrid) {
  const phoneNumber = '256700000000';

  productGrid.innerHTML = products
    .map((product, index) => {
      const imageName = productImages[Math.floor(Math.random() * productImages.length)];
      const imageSrc = encodeURI(`Images/${imageName}`);
      const message = encodeURIComponent(
        `Hello WADE Fragrances, I would like to order ${product.name} (${product.size}).`
      );

      return `
        <article class="product-card" style="animation-delay: ${index * 70}ms;">
          <div class="product-image" style="background: linear-gradient(135deg, ${product.accent[0]}, ${product.accent[1]});">
            <img src="${imageSrc}" alt="${product.name}" />
          </div>
          <div class="product-info">
            <h2 class="product-name">${product.name}</h2>
            <p class="product-meta">${product.size}</p>
            <div class="price-row">
              <span class="product-price">UGX ${product.price.toLocaleString()}</span>
              <a class="order-button" href="https://wa.me/${phoneNumber}?text=${message}" target="_blank" rel="noopener noreferrer">Order</a>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}
