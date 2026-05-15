const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const filter = searchInput.value.toLowerCase();
        const products = document.querySelectorAll(".product-card");

        products.forEach(function (product) {
            const text = product.textContent.toLowerCase();

            if (text.includes(filter)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || service === "" || message === "") {
            formMessage.textContent = "Please complete all required fields.";
            formMessage.style.color = "red";
        } else {
            formMessage.textContent = "Thank you! Your message has been submitted.";
            formMessage.style.color = "green";
            contactForm.reset();
        }
    });
}

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const newsletterEmail = document.getElementById("newsletterEmail").value.trim();
        const newsletterMessage = document.getElementById("newsletterMessage");

        if (newsletterEmail === "") {
            newsletterMessage.textContent = "Please enter your email address.";
            newsletterMessage.style.color = "red";
        } else {
            newsletterMessage.textContent = "Thank you for signing up!";
            newsletterMessage.style.color = "green";
            newsletterForm.reset();
        }
    });
}