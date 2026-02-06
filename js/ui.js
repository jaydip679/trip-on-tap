function renderTours() {
    const container = document.getElementById("tourContainer");
    if (!container) return;

    container.innerHTML = tours.map(tour => `
        <div class="card">
            <img src="${tour.image}" alt="${tour.title}">
            <h3>${tour.title}</h3>
        </div>
    `).join("");
}
