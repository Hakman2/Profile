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

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const query = searchInput.value.trim(); // Get the search query
    if (query) {
      alert(`Searching for: ${query}`); // Replace with actual search logic
      // Example: Redirect to a search results page
      // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    } else {
      alert("Please enter a search term.");
    }
  });
});
