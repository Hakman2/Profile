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

  // Search logic
  const searchForm = document.getElementById("search-form");
  const searchInput = document.querySelector(".search-input");
  const shopCards = document.querySelectorAll(".border-render");

  if (searchForm && searchInput && shopCards.length) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const query = searchInput.value.trim().toLowerCase();
      let found = false;
      shopCards.forEach((card) => {
        const shopName = card.getAttribute("data-name").toLowerCase();
        if (shopName.includes(query)) {
          card.style.display = "block";
          found = true;
        } else {
          card.style.display = "none";
        }
      });
      if (!found) alert("No shops found matching your search.");
    });

    searchInput.addEventListener("input", function () {
      if (searchInput.value.trim() === "") {
        shopCards.forEach((card) => {
          card.style.display = "block";
        });
      }
    });
  }

  // Hamburger menu logic
  const hamburger = document.getElementById("hamburger-menu");
  const navMenu = document.getElementById("nav-menu");

  function closeMenu() {
    if (navMenu && hamburger) {
      navMenu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  }

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      navMenu.classList.toggle("open");
      hamburger.setAttribute(
        "aria-expanded",
        navMenu.classList.contains("open") ? "true" : "false"
      );
    });

    navMenu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        closeMenu();
      }
    });

    document.addEventListener("click", function (e) {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
      }
    });

    window.addEventListener("resize", closeMenu);
  }
});
