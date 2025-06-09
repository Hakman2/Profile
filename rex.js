document.addEventListener("DOMContentLoaded", function () {
  // Voting logic
  const positionsContainer = document.getElementById("positions-container");
  let candidates = {}; // { position: [name, ...] }
  let votes = {}; // { position: { name: count } }

  // Add candidate to UI and data
  function addCandidate(position, name) {
    if (!candidates[position]) {
      candidates[position] = [];
      votes[position] = {};
    }
    candidates[position].push(name);
    votes[position][name] = 0;
    renderPositions();
  }

  // Render all positions and candidates
  function renderPositions() {
    positionsContainer.innerHTML = "";
    Object.keys(candidates).forEach((position) => {
      const section = document.createElement("div");
      section.className = "card";
      section.innerHTML = `<h3>${position}</h3>`;
      candidates[position].forEach((name) => {
        const btn = document.createElement("button");
        btn.textContent = `Vote for ${name} (${votes[position][name]})`;
        btn.onclick = function () {
          votes[position][name]++;
          btn.textContent = `Vote for ${name} (${votes[position][name]})`;
          btn.classList.add("voted");
          setTimeout(() => btn.classList.remove("voted"), 800);
        };
        section.appendChild(btn);
      });
      positionsContainer.appendChild(section);
    });
  }

  // Hook into your form logic
  const form = document.getElementById("add-candidate-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const position = document.getElementById("position").value.trim();
    const name = document.getElementById("name").value.trim();
    if (!position || !name) return;
    addCandidate(position, name);
    form.reset();
  });
});
