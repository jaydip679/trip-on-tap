document.addEventListener("DOMContentLoaded", function () {

    /* DAY 1 – Render Tours */
    if (typeof tours !== "undefined") {
        renderTours(tours);
    }

    /* DAY 2 – Search & Filter */
    const searchInput = document.getElementById("searchInput");
    const priceFilter = document.getElementById("priceFilter");

    if (searchInput && priceFilter) {
        function filterTours() {
            let filtered = tours;
            const val = searchInput.value.toLowerCase();

            if (val) {
                filtered = filtered.filter(t =>
                    t.location.toLowerCase().includes(val)
                );
            }

            if (priceFilter.value === "low") {
                filtered.sort((a, b) => a.price - b.price);
            }

            renderTours(filtered);
        }

        searchInput.addEventListener("input", filterTours);
        priceFilter.addEventListener("change", filterTours);
    }

    /* DAY 3 – Load Tour Details */
    const details = document.getElementById("tourDetails");
    if (details) {
        const id = localStorage.getItem("selectedTourId");
        const tour = tours.find(t => t.id == id);

        if (tour) {
            details.innerHTML = `
                <h3>${tour.title}</h3>
                <img src="${tour.image}" width="300">
                <p>${tour.location}</p>
                <p>${tour.duration}</p>
                <p>₹${tour.price}</p>
            `;
        }
    }

    /* DAY 4 – Booking Validation */
    const form = document.getElementById("bookingForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = nameInput.value;
            const email = emailInput.value;
            const date = dateInput.value;
            const people = peopleInput.value;
            const status = document.getElementById("bookingStatus");

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !date || !people) {
                status.textContent = "All fields required";
                status.style.color = "red";
                return;
            }

            if (!emailRegex.test(email)) {
                status.textContent = "Invalid email";
                status.style.color = "red";
                return;
            }

            saveBooking({ name, email, date, people });
            status.textContent = "Booking successful!";
            status.style.color = "green";
        });
    }

    /* DAY 6 – Wishlist Load */
    const wishlistPage = document.getElementById("wishlistContainer");
    if (wishlistPage) {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const toursInWishlist = tours.filter(t => wishlist.includes(t.id));
        renderWishlist(toursInWishlist);
    }
});

/* Helpers */

function viewDetails(id) {
    localStorage.setItem("selectedTourId", id);
    window.location.href = "details.html";
}

function saveBooking(data) {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(data);
    localStorage.setItem("bookings", JSON.stringify(bookings));
}

function toggleWishlist(id) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(i => i !== id);
    } else {
        wishlist.push(id);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}
