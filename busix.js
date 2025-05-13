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
});
