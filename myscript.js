(function(html) {
    const ssPreloader = function() {
        const siteBody = document.querySelector('body');
        const preloader = document.querySelector('#preloader');
        const container = document.querySelector('.container');
        if (!preloader) return;

        html.classList.add('ss-preload');
        
        window.addEventListener('load', function() {
            html.classList.remove('ss-preload');
            html.classList.add('ss-loaded');
            
            preloader.addEventListener('transitionend', function afterTransition(e) {
                if (e.target.matches('#preloader'))  {
                    siteBody.classList.add('ss-show');
                    e.target.style.display = 'none';
                    preloader.removeEventListener(e.type, afterTransition);
                    container.classList.remove('hidden'); // Show the container
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
  const collectionCover = document.getElementById("collection-cover");
  const scrollButton = document.querySelector(".js-scroll-past-cover");

  // Function to adjust the height of the collection cover
  function adjustCoverHeight() {
    const previewWarning = document.getElementById("preview-warning");
    const previewWarningOffset = previewWarning
      ? previewWarning.offsetHeight
      : 0;
    const newHeight = window.innerHeight - previewWarningOffset;
    collectionCover.style.height = `${newHeight}px`;
  }

  // Adjust height on page load and window resize
  adjustCoverHeight();
  window.addEventListener("resize", adjustCoverHeight);

  // Scroll to gallery section on button click
  scrollButton.addEventListener("click", function (e) {
    e.preventDefault();
    const gallerySection = document.getElementById("page-container");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  });
});