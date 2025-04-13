fetch('/api/listings')
  .then(res => res.json())
  .then(data => {
    const listings = document.getElementById('listings');
    listings.innerHTML = data.map(item => `
      <div class="card">
        <h3>${item.title}</h3>
        <p>${item.location}</p>
        <strong>$${item.price}</strong>
      </div>
    `).join('');
  });
