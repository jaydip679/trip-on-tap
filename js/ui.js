function renderTours(tourList) {
    const container = document.getElementById("tourContainer");

    container.innerHTML = tourList.map(tour => `
        <article class="card">
            <img src="${tour.image}" alt="${tour.title}">
            <h3>${tour.title}</h3>
            <p>Location: ${tour.location}</p>
            <p>Duration: ${tour.duration}</p>
            <p>Price: ₹${tour.price}</p>
        </article>
    `).join("");
}
