let candidates = JSON.parse(localStorage.getItem("candidates")) || {};
// Track which positions the user has voted for (by position name)
let votedPositions = JSON.parse(localStorage.getItem("votedPositions")) || {};

function saveCandidates() {
  localStorage.setItem("candidates", JSON.stringify(candidates));
}

// Save voted positions to localStorage
function saveVotedPositions() {
  localStorage.setItem("votedPositions", JSON.stringify(votedPositions));
}

function renderCandidates() {
  const container = document.getElementById("positions-container");
  container.innerHTML = "";

  Object.keys(candidates).forEach((position) => {
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

      const voteBtn = document.createElement("button");
      voteBtn.textContent = `Vote for ${candidate.name}`;
      // Disable button if already voted for this position
      voteBtn.disabled = !!votedPositions[position];
      voteBtn.onclick = function () {
        if (votedPositions[position]) {
          document.getElementById("vote-message").textContent =
            "You have already voted for this position.";
          return;
        }
        votedPositions[position] = true;
        saveVotedPositions();
        renderCandidates();
        document.getElementById(
          "vote-message"
        ).textContent = `Thank you! Your vote for "${candidate.name}" as "${position}" has been recorded.`;
        setTimeout(() => {
          document.getElementById("vote-message").textContent = "";
        }, 3000);
      };
      section.appendChild(voteBtn);
    });

    container.appendChild(section);
  });
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
