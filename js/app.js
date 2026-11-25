(function () {
  let activeCategory = "Toutes";
  const flippedCards = {};

  let currentQuestionIdx = 0;
  const selectedAnswers = {};
  const shownHints = {};

  // Navigation entre les 3 pages
  const navBtns = document.querySelectorAll(".nav-btn");
  const views = document.querySelectorAll(".view-section");

  function switchView(viewName) {
    navBtns.forEach((btn) => {
      const isMatch = btn.dataset.view === viewName;
      btn.classList.toggle("active", isMatch);
      btn.setAttribute("aria-selected", String(isMatch));
      btn.setAttribute("tabindex", isMatch ? "0" : "-1");
    });
    views.forEach((sec) => {
      sec.classList.toggle("active", sec.id === `view-${viewName}`);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navBtns.forEach((btn) => {
    btn.addEventListener("click", () => switchView(btn.dataset.view));
  });

  navBtns.forEach((btn, index) => {
    btn.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();

      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % navBtns.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + navBtns.length) % navBtns.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = navBtns.length - 1;

      navBtns[nextIndex].focus();
      switchView(navBtns[nextIndex].dataset.view);
    });
  });

  document.querySelectorAll("[data-goto]").forEach((btn) => {
    btn.addEventListener("click", () => switchView(btn.dataset.goto));
  });

  // Mode TNI (agrandissement de police pour projection en classe)
  const tniModeBtn = document.getElementById("tniModeBtn");
  tniModeBtn.addEventListener("click", () => {
    const active = document.body.classList.toggle("tni-large");
    tniModeBtn.textContent = active ? "🖥️ Texte normal" : "🖥️ Mode TNI";
  });

  document.getElementById("printActivityBtn").addEventListener("click", () => window.print());

  // =========================================================
  // PAGE 2 : RENDU DES EXEMPLES INTERACTIFS
  // =========================================================
  const categoryFiltersEl = document.getElementById("categoryFilters");
  const examplesGridEl = document.getElementById("examplesGrid");

  function renderFilters() {
    const categories = ["Toutes", ...new Set(BIO_EXAMPLES.map((e) => e.category))];
    categoryFiltersEl.innerHTML = "";
    categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = `filter-btn ${cat === activeCategory ? "active" : ""}`;
      btn.textContent = cat;
      btn.setAttribute("aria-pressed", String(cat === activeCategory));
      btn.addEventListener("click", () => {
        activeCategory = cat;
        renderFilters();
        renderExamples();
      });
      categoryFiltersEl.appendChild(btn);
    });
  }

  function renderExamples() {
    const filtered = activeCategory === "Toutes"
      ? BIO_EXAMPLES
      : BIO_EXAMPLES.filter((e) => e.category === activeCategory);

    examplesGridEl.innerHTML = "";
    filtered.forEach((item) => {
      const isInvention = Boolean(flippedCards[item.id]);
      const card = document.createElement("article");
      card.className = `example-card ${isInvention ? "mode-invention" : ""}`;

      const imgSrc = isInvention ? item.inventionImage : item.natureImage;
      const imgAlt = isInvention ? item.inventionAlt : item.natureAlt;
      const fallbackEmoji = isInvention ? item.inventionEmoji : item.natureEmoji;

      card.innerHTML = `
        <div>
          <div class="card-media">
            <img
              src="${imgSrc}"
              alt="${imgAlt}"
              class="example-photo"
              loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            />
            <div class="photo-fallback" style="display:none;">${fallbackEmoji}</div>
            <span class="mode-badge badge-overlay">
              ${isInvention ? "⚙️ Invention humaine" : "🌿 Modèle dans la nature"}
            </span>
          </div>
          <h3 class="example-title">${isInvention ? item.inventionTitle : item.natureTitle}</h3>
          <p>${isInvention ? item.inventionDesc : item.natureDesc}</p>
        </div>
        <div>
          <div class="principle-box">${item.principle}</div>
          ${item.sourceUrl ? `
            <a class="source-link" href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">
              Source : ${item.sourceTitle}
            </a>
            ${item.sourceNote ? `<small class="source-note">${item.sourceNote}</small>` : ""}
          ` : ""}
          <button class="btn ${isInvention ? "btn-secondary" : "btn-primary"}" style="width:100%; margin-top:0.75rem;">
            ${isInvention ? "↩ Revoir l'inspiration naturelle" : "✨ Découvrir l'invention humaine"}
          </button>
        </div>
      `;

      card.querySelector("button").addEventListener("click", () => {
        flippedCards[item.id] = !isInvention;
        renderExamples();
      });

      examplesGridEl.appendChild(card);
    });
  }
  // =========================================================
  // PAGE 3 : RENDU DU QUIZ TNI
  // =========================================================
  const quizCardEl = document.getElementById("quizCard");
  const scoreDisplayEl = document.getElementById("scoreDisplay");
  const totalDisplayEl = document.getElementById("totalDisplay");
  const prevQuestionBtn = document.getElementById("prevQuestionBtn");
  const nextQuestionBtn = document.getElementById("nextQuestionBtn");
  const hintBtn = document.getElementById("hintBtn");

  function updateScore() {
    let score = 0;
    BIO_QUIZ.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) score++;
    });
    scoreDisplayEl.textContent = score;
    totalDisplayEl.textContent = BIO_QUIZ.length;
  }

  function renderQuiz() {
    updateScore();

    // Écran récapitulatif final si toutes les questions sont parcourues au-delà de la dernière
    if (currentQuestionIdx >= BIO_QUIZ.length) {
      const finalScore = Number(scoreDisplayEl.textContent);
      quizCardEl.innerHTML = `
        <div style="text-align:center; padding:1rem 0;">
          <div style="font-size:3rem;">🏆</div>
          <h3 style="font-size:1.5rem; margin:0.5rem 0;">Bravo à toute la classe !</h3>
          <p class="lead">Score final : <strong>${finalScore} / ${BIO_QUIZ.length}</strong></p>
          <p class="muted" style="margin:1rem 0;">Vous êtes maintenant prêts pour l'activité de dessin bio-inspiré !</p>
          <button id="restartQuizBtn" class="btn btn-primary">🔄 Recommencer le quiz</button>
        </div>
      `;
      document.getElementById("restartQuizBtn").addEventListener("click", () => {
        Object.keys(selectedAnswers).forEach((k) => delete selectedAnswers[k]);
        Object.keys(shownHints).forEach((k) => delete shownHints[k]);
        currentQuestionIdx = 0;
        renderQuiz();
      });
      prevQuestionBtn.disabled = false;
      nextQuestionBtn.disabled = true;
      hintBtn.disabled = true;
      return;
    }

    const q = BIO_QUIZ[currentQuestionIdx];
    const chosen = selectedAnswers[q.id];
    const hintVisible = Boolean(shownHints[q.id]);

    quizCardEl.innerHTML = `
      <div class="quiz-progress">Question ${currentQuestionIdx + 1} sur ${BIO_QUIZ.length}</div>
      <div class="quiz-q-text">${q.question}</div>
      <div class="quiz-options" id="optionsList"></div>
      ${hintVisible ? `<div class="hint-box">💡 <strong>Indice :</strong> ${q.hint}</div>` : ""}
      ${chosen !== undefined ? `
        <div class="feedback-box">
          <strong>${chosen === q.correctIndex ? "✅ Bonne réponse !" : "❌ Pas tout à fait !"}</strong>
          ${q.explanation}
        </div>
      ` : ""}
    `;

    const optionsList = document.getElementById("optionsList");
    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-opt-btn";
      btn.textContent = `${String.fromCharCode(65 + idx)}. ${opt}`;

      if (chosen !== undefined) {
        if (idx === q.correctIndex) btn.classList.add("correct");
        else if (idx === chosen) btn.classList.add("wrong");
      }

      btn.addEventListener("click", () => {
        selectedAnswers[q.id] = idx;
        renderQuiz();
      });

      optionsList.appendChild(btn);
    });

    prevQuestionBtn.disabled = currentQuestionIdx === 0;
    nextQuestionBtn.disabled = false;
    nextQuestionBtn.textContent = currentQuestionIdx === BIO_QUIZ.length - 1
      ? "Voir le résultat final 🏆"
      : "Question suivante →";
    hintBtn.disabled = hintVisible;
  }

  prevQuestionBtn.addEventListener("click", () => {
    if (currentQuestionIdx > 0) {
      currentQuestionIdx--;
      renderQuiz();
    }
  });

  nextQuestionBtn.addEventListener("click", () => {
    if (currentQuestionIdx < BIO_QUIZ.length) {
      currentQuestionIdx++;
      renderQuiz();
    }
  });

  hintBtn.addEventListener("click", () => {
    const q = BIO_QUIZ[currentQuestionIdx];
    if (q) {
      shownHints[q.id] = true;
      renderQuiz();
    }
  });

  // Initialisation
  renderFilters();
  renderExamples();
  renderQuiz();
})();