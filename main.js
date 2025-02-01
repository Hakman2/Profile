document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = lightbox.querySelector("img");
    const close = document.querySelector(".close");

    // Show lightbox on click
    images.forEach(image => {
        image.addEventListener("click", function () {
            lightboxImage.src = this.src;
            lightbox.style.display = "flex";
        });
    });

    // Close lightbox on click
    close.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close lightbox if clicked outside content
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
