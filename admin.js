document.addEventListener("DOMContentLoaded", function () {
  // Data storage (in-memory for demo; backend needed for real use)
  let candidates = {}; // { position: [name, ...] }
  let votes = {}; // { position: { name: count } }

  // DOM elements
  const form = document.getElementById("add-candidate-form");
  const positionInput = document.getElementById("position");
  const nameInput = document.getElementById("name");
  const formMessage = document.getElementById("form-message");
  const positionsContainer = document.getElementById("positions-container");
  const resultsContainer = document.getElementById("results-container");

  // Add candidate logic
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const position = positionInput.value.trim();
    const name = nameInput.value.trim();
    if (!position || !name) {
      formMessage.textContent = "Please fill in both fields.";
      formMessage.style.color = "red";
      return;
    }
    if (!candidates[position]) {
      candidates[position] = [];
      votes[position] = {};
    }
    if (candidates[position].includes(name)) {
      formMessage.textContent = "Candidate already exists for this position.";
      formMessage.style.color = "red";
      return;
    }
    candidates[position].push(name);
    votes[position][name] = 0;
    formMessage.textContent = `Candidate "${name}" for "${position}" added!`;
    formMessage.style.color = "green";
    form.reset();
    renderPositions();
    renderResults();
    setTimeout(() => {
      formMessage.textContent = "";
    }, 2000);
  });

  // Render all positions and candidates
  function renderPositions() {
    positionsContainer.innerHTML = "";
    Object.keys(candidates).forEach((position) => {
      const section = document.createElement("div");
      section.className = "card";
      section.innerHTML = `<h3>${position}</h3>`;
      const ul = document.createElement("ul");
      candidates[position].forEach((name) => {
        const li = document.createElement("li");
        li.textContent = name;
        ul.appendChild(li);
      });
      section.appendChild(ul);
      positionsContainer.appendChild(section);
    });
  }

  // Render voting results
  function renderResults() {
    resultsContainer.innerHTML = "";
    Object.keys(votes).forEach((position) => {
      const section = document.createElement("div");
      section.className = "card";
      section.innerHTML = `<h3>${position} Results</h3>`;
      const ul = document.createElement("ul");
      Object.keys(votes[position]).forEach((name) => {
        const li = document.createElement("li");
        li.textContent = `${name}: ${votes[position][name]} vote(s)`;
        ul.appendChild(li);
      });
      section.appendChild(ul);
      resultsContainer.appendChild(section);
    });
  }

  // Initial render
  renderPositions();
  renderResults();
});
