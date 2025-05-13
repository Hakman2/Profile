// function loadSection(section) {
//   // Hide all sections
//   document.querySelectorAll(".section").forEach((sec) => {
//     sec.classList.add("hidden");
//     sec.classList.remove("visible");
//     document.querySelector(".default").classList.add("hidden")
//     document.querySelector(".default").classList.remove("visible")
//   });

//   // Show the selected section
//   if (section === "dash") {
//     document.getElementById("Dashboard-section").classList.remove("hidden");
//     document.getElementById("Dashboard-section").classList.add("visible");
//   } else if (section === "active") {
//     document.getElementById("active-section").classList.remove("hidden");
//     document.getElementById("active-section").classList.add("visible");
//   } else if (section === "ask") {
//     document.getElementById("FQA-section").classList.remove("hidden");
//     document.getElementById("FQA-section").classList.add("visible");
//   }else{
//     document.querySelector(".default").classList.remove("hidden")
//     document.querySelector(".default").classList.add("hidden")
//   }
// }
// Function to load sections dynamically
function loadSection(section) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach((sec) => sec.classList.add('hidden'));

  // Show the selected section
  const selectedSection = document.getElementById(`${section}-section`);
  if (selectedSection) {
    selectedSection.classList.remove('hidden');
  }
}

// Add event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('#btn');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const section = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
      loadSection(section);
    });
  });
});
