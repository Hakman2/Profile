(function (html) {
  // Preloader logic
  const ssPreloader = function () {
    const siteBody = document.body;
    const preloader = document.getElementById("preloader");
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
          if (container) container.classList.remove("hidden");
        }
      });
    });
  };

  // Initialize
  (function ssInit() {
    ssPreloader();
    // Other initialization functions can be called here
  })();
})(document.documentElement);

document.addEventListener("DOMContentLoaded", function () {
  // Responsive nav shrink on resize
  const nav = document.querySelector(".nav");
  function handleResize() {
    if (nav) {
      if (window.innerWidth < 800) {
        nav.classList.add("shrink");
      } else {
        nav.classList.remove("shrink");
      }
    }
  }
  window.addEventListener("resize", handleResize);
  handleResize();

 // Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Search Logic
  const searchForm = document.getElementById("search-form");
  const searchInput = document.querySelector(".search-input");
  const shopCards = document.querySelectorAll(".border-render");

  const showAllCards = () => {
    shopCards.forEach(card => (card.style.display = "block"));
  };

  const filterCards = (query) => {
    let found = false;
    shopCards.forEach(card => {
      const shopName = card.dataset.name.toLowerCase();
      if (shopName.includes(query)) {
        card.style.display = "block";
        found = true;
      } else {
        card.style.display = "none";
      }
    });
    if (!found) alert("No shops found matching your search.");
  };

  if (searchForm && searchInput && shopCards.length) {
    searchForm.addEventListener("submit", e => {
      e.preventDefault();
      const query = searchInput.value.trim().toLowerCase();
      filterCards(query);
    });

    searchInput.addEventListener("input", () => {
      if (searchInput.value.trim() === "") showAllCards();
    });
  }

  // Hamburger Menu Logic
  const hamburger = document.getElementById("hamburger-menu");
  const navMenu = document.getElementById("nav-menu");

  const closeMenu = () => {
    navMenu?.classList.remove("open");
    hamburger?.setAttribute("aria-expanded", "false");
  };

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", e => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", isOpen.toString());
    });

    navMenu.addEventListener("click", e => {
      if (e.target.tagName === "A") closeMenu();
    });

    document.addEventListener("click", e => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
      }
    });

    window.addEventListener("resize", closeMenu);
  }
});
