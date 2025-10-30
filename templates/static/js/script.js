// Simple JS helpers — keeps your original showX functions but uses consistent class names.
// These aren't required for the :target anchor behavior, but kept for compatibility
// if you want to switch to JS-based navigation in the future.

function showHome() {
    console.log("Switching to Home");
    document.querySelector('.home-page').style.display = 'block';
    document.querySelector('.metodo-page').style.display = 'none';
    document.querySelector('.planos-page').style.display = 'none';
    document.querySelector('.contato-page').style.display = 'none';
}

function showMetodo() {
    console.log("Switching to Metodo");
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.metodo-page').style.display = 'block';
    document.querySelector('.planos-page').style.display = 'none';
    document.querySelector('.contato-page').style.display = 'none';
}

function showPlanos() {
    console.log("Switching to Planos");
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.metodo-page').style.display = 'none';
    document.querySelector('.planos-page').style.display = 'block';
    document.querySelector('.contato-page').style.display = 'none';
}

function showContato() {
    console.log("Switching to Contato");
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.metodo-page').style.display = 'none';
    document.querySelector('.planos-page').style.display = 'none';
    document.querySelector('.contato-page').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    // This script preserves some behavior you had about filtering / modal images.
    const filterButtons = document.querySelectorAll(".filter-button");
    const artItems = document.querySelectorAll(".art-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;
            artItems.forEach(item => {
                if (filter === "all" || item.dataset.category === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // modal image popup (if you later add a modal to the HTML)
    const modal = document.getElementById("popup-modal");
    const modalImg = document.getElementById("popup-image");
    const closePopup = document.getElementById("close-popup");

    artItems.forEach(item => {
        item.addEventListener("click", () => {
            if (modal && modalImg) {
                modalImg.src = item.querySelector("img").src;
                modal.classList.remove("hidden");
            }
        });
    });

    if (closePopup) {
        closePopup.addEventListener("click", () => {
            modal.classList.add("hidden");
        });
    }
});
