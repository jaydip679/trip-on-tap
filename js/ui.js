function renderTours(tourList) {
    const container = document.getElementById("tourContainer");
    if (!container) return;

    container.innerHTML = tourList.map(tour => `
        <article class="card">
            <img src="${tour.image}">
            <h3>${tour.title}</h3>
            <p>${tour.location}</p>
            <p>₹${tour.price}</p>
            <button onclick="viewDetails(${tour.id})">View Details</button>
            <button onclick="toggleWishlist(${tour.id})">❤️</button>
        </article>
    `).join("");
}

function renderWishlist(list) {
    const container = document.getElementById("wishlistContainer");
    if (!container) return;

    container.innerHTML = list.map(tour => `
        <article class="card">
            <img src="${tour.image}">
            <h3>${tour.title}</h3>
            <p>${tour.location}</p>
            <button onclick="toggleWishlist(${tour.id})">Remove</button>
        </article>
    `).join("");
}
