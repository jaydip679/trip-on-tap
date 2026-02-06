document.addEventListener("DOMContentLoaded", function () {

    if (typeof renderTours === "function") {
        renderTours();
    }

    document.querySelectorAll(".selectPackage").forEach(btn => {
        btn.addEventListener("click", () => {
            const pkg = btn.parentElement.dataset.package;
            localStorage.setItem("selectedPackage", pkg);
            window.location.href = "details.html";
        });
    });

    const form = document.getElementById("bookingForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = name.value.trim();
            const email = email.value.trim();
            const phone = phone.value.trim();
            const date = date.value;
            const status = document.getElementById("bookingStatus");

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !phone || !date) {
                status.textContent = "All fields required";
                status.style.color = "red";
                return;
            }

            if (!emailRegex.test(email)) {
                status.textContent = "Invalid email";
                status.style.color = "red";
                return;
            }

            if (phone.length !== 10) {
                status.textContent = "Phone must be 10 digits";
                status.style.color = "red";
                return;
            }

            status.textContent = "Booking Successful!";
            status.style.color = "green";
        });
    }
});
