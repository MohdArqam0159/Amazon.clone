// ==========================
// CART FUNCTIONALITY
// ==========================

let cartCount = document.getElementById("cart-count");

let count = 0;

let cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        count++;

        cartCount.innerText = count;

        button.innerText = "Added ✓";
        button.style.background = "green";
        button.style.color = "white";

        setTimeout(() => {

            button.innerText = "Add To Cart";
            button.style.background = "#ffd814";
            button.style.color = "black";

        }, 1200);

    });

});

// ==========================
// PRODUCT SEARCH
// ==========================

let searchInput = document.getElementById("searchInput");

let cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    cards.forEach(card => {

        let productName = card
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (productName.includes(value)) {

            card.style.display = "block";

        }
        else {

            card.style.display = "none";

        }

    });

});

// ==========================
// NEWSLETTER
// ==========================

let subscribeBtn =
document.getElementById("subscribeBtn");

subscribeBtn.addEventListener("click", () => {

    alert(
        "🎉 Thank you for subscribing to our newsletter!"
    );

});

// ==========================
// BACK TO TOP BUTTON
// ==========================

let topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    }
    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ==========================
// CATEGORY CLICK EFFECT
// ==========================

let categories =
document.querySelectorAll(".category");

categories.forEach(category => {

    category.addEventListener("click", () => {

        alert(
            category.innerText +
            " category selected"
        );

    });

});

// ==========================
// HERO BUTTON
// ==========================

let shopNowBtn =
document.querySelector(".hero-content button");

shopNowBtn.addEventListener("click", () => {

    document
    .querySelector(".products")
    .scrollIntoView({

        behavior: "smooth"

    });

});

// ==========================
// PRIME BUTTON
// ==========================

let primeBtn =
document.querySelector(".prime button");

primeBtn.addEventListener("click", () => {

    alert(
        "Amazon Prime Membership Coming Soon!"
    );

});

// ==========================
// DEAL CARDS HOVER EFFECT
// ==========================

let dealCards =
document.querySelectorAll(".deal-card");

dealCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "scale(1)";

    });

});

// ==========================
// PRODUCT IMAGE ZOOM EFFECT
// ==========================

let productImages =
document.querySelectorAll(".card img");

productImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform =
        "scale(1.05)";

        image.style.transition =
        "0.3s";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform =
        "scale(1)";

    });

});

// ==========================
// DYNAMIC GREETING
// ==========================

let currentHour =
new Date().getHours();

let greeting = "";

if (currentHour < 12) {

    greeting = "Good Morning";

}
else if (currentHour < 18) {

    greeting = "Good Afternoon";

}
else {

    greeting = "Good Evening";

}

console.log(greeting);

// ==========================
// PAGE LOADED MESSAGE
// ==========================

window.addEventListener("load", () => {

    console.log(
        "Amazon Clone Loaded Successfully"
    );

});

// ==========================
// FOOTER LINKS
// ==========================

let footerLinks =
document.querySelectorAll(".footer-grid p");

footerLinks.forEach(link => {

    link.addEventListener("click", () => {

        alert(
            link.innerText +
            " page coming soon."
        );

    });

});

// ==========================
// CART CLICK
// ==========================

let cart =
document.querySelector(".cart");

cart.addEventListener("click", () => {

    alert(
        "You have " +
        count +
        " item(s) in your cart."
    );

});

// ==========================
// SIMPLE LOADER EFFECT
// ==========================

document.body.style.opacity = "0";

window.addEventListener("load", () => {

    document.body.style.transition =
    "opacity 1s";

    document.body.style.opacity = "1";

});

// ==========================
// END OF FILE
// ==========================