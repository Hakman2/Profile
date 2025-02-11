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
let loadUnderMaintainance = document.querySelector("body");
loadUnderMaintainance.innerHTML = `
<div class="maintainance"> 
<h1>Under Maintainance</h1>
 <p>Sorry for the inconvenience, we are currently under maintainance.
 Please check back later</p><button><a href="index.html">Home</a></<button> </div>`;
