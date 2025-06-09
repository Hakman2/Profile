let candidates = JSON.parse(localStorage.getItem("candidates")) || {};

function saveCandidates() {
  localStorage.setItem("candidates", JSON.stringify(candidates));
}

function renderCandidates() {
  const container = document.getElementById("positions-container");
  container.innerHTML = "";

  for (let position in candidates) {
    const section = document.createElement("div");
    section.className = "card";
    section.innerHTML = `<h3>${position}</h3>`;

    candidates[position].forEach((candidate, index) => {
      const btn = document.createElement("button");
      btn.textContent = `${candidate.name} - Votes: ${candidate.votes}`;
      btn.onclick = () => {
        candidates[position][index].votes++;
        saveCandidates();
        renderCandidates();
      };
      section.appendChild(btn);
      section.appendChild(document.createElement("br"));
    });

    container.appendChild(section);
  }
}

// Handle admin form submission
document
  .getElementById("add-candidate-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const position = document.getElementById("position").value.trim();
    const name = document.getElementById("name").value.trim();

    if (!candidates[position]) {
      candidates[position] = [];
    }

    candidates[position].push({ name, votes: 0 });
    saveCandidates();
    renderCandidates();

    document.getElementById("add-candidate-form").reset();
  });

// Initialize
renderCandidates();
