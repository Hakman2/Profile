(function (html) {
  const ssPreloader = function () {
    const siteBody = document.querySelector("body");
    const preloader = document.querySelector("#preloader");
    const container = document.querySelector(".busix-nav");
    if (!preloader) return;

    html.classList.add("ss-preload");

    window.addEventListener("load", function () {
      html.classList.remove("ss-preload");
      html.classList.add("ss-loaded");

      preloader.addEventListener("transitionend", function afterTransition(e) {
        if (e.target.matches("#preloader")) {
          siteBody.classList.add("ss-show");
          e.target.style.display = "none";
          preloader.removeEventListener(e.type, afterTransition);
          container.classList.remove("hidden"); // Show the container
        }
      });
    });
  };

  /* Initialize
   * ------------------------------------------------------ */
  (function ssInit() {
    ssPreloader();
    // Other initialization functions can be called here
  })();
})(document.documentElement);

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav");

  // Function to shrink the navigation bar on window resize
  function handleResize() {
    if (window.innerWidth < 800) {
      // Adjust the width threshold as needed
      nav.classList.add("shrink");
    } else {
      nav.classList.remove("shrink");
    }
  }

  // Listen for the resize event
  window.addEventListener("resize", handleResize);

  // Trigger the resize handler on page load
  handleResize();

  const searchForm = document.getElementById("search-form");
  const searchInput = document.querySelector(".search-input");
  const shopCards = document.querySelectorAll(".border-render");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const query = searchInput.value.trim().toLowerCase(); // Get the search query
    let found = false;

    shopCards.forEach((card) => {
      const shopName = card.getAttribute("data-name").toLowerCase();
      if (shopName.includes(query)) {
        card.style.display = "block"; // Show matching shop
        found = true;
      } else {
        card.style.display = "none"; // Hide non-matching shops
      }
    });

    if (!found) {
      alert("No shops found matching your search.");
    }
  });

  // Reset the search and show all shops when the input is cleared
  searchInput.addEventListener("input", function () {
    if (searchInput.value.trim() === "") {
      shopCards.forEach((card) => {
        card.style.display = "block"; // Show all shops
      });
    }
  });
});
