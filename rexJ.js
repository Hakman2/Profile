function loadSection(section) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((sec) => {
    sec.classList.add("hidden");
    sec.classList.remove("visible");
  });

  // Show the selected section
  if (section === "dash") {
    document.getElementById("Dashboard-section").classList.remove("hidden");
    document.getElementById("Dashboard-section").classList.add("visible");
  } else if (section === "active") {
    document.getElementById("active-section").classList.remove("hidden");
    document.getElementById("active-section").classList.add("visible");
  } else if (section === "ask") {
    document.getElementById("FQA-section").classList.remove("hidden");
    document.getElementById("FQA-section").classList.add("visible");
  }
}
