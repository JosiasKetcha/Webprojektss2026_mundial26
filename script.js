// Burger-Button und Navigationsmenü abrufen
const burgerBtn = document.getElementById("burgerBtn");
const navLinks  = document.getElementById("navLinks");

// Beim Klick auf den Burger-Button...
burgerBtn.addEventListener("click", function() {

  // Klasse "open" hinzufügen oder entfernen
  navLinks.classList.toggle("open");

});

// Menü schließen, wenn ein Link angeklickt wird
const allLinks = document.querySelectorAll(".link");

allLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    navLinks.classList.remove("open");
  });
});

// Zurück-Button - zur vorherigen Seite navigieren
const backBtn = document.querySelector(".back-btn");

backBtn.addEventListener("click", function() {
    window.history.back();   /* geht zur vorherigen Seite zurück */
});


/* TEAMS-SEITE — Daten und Filter */

const teams = [
  // Gruppe A
  { name: "Mexiko",         flag: "mx", gruppe: "A", konfed: "CONCACAF (Gastgeber)" },
  { name: "Südafrika",      flag: "za", gruppe: "A", konfed: "CAF" },
  { name: "Südkorea",       flag: "kr", gruppe: "A", konfed: "AFC" },
  { name: "Tschechien",     flag: "cz", gruppe: "A", konfed: "UEFA" },

  // Gruppe B
  { name: "Kanada",         flag: "ca", gruppe: "B", konfed: "CONCACAF (Gastgeber)" },
  { name: "Bosnien und Herzegowina", flag: "ba", gruppe: "B", konfed: "UEFA" },
  { name: "Katar",          flag: "qa", gruppe: "B", konfed: "AFC" },
  { name: "Schweiz",        flag: "ch", gruppe: "B", konfed: "UEFA" },

  // Gruppe C
  { name: "Brasilien",      flag: "br", gruppe: "C", konfed: "CONMEBOL" },
  { name: "Marokko",        flag: "ma", gruppe: "C", konfed: "CAF" },
  { name: "Haiti",          flag: "ht", gruppe: "C", konfed: "CONCACAF" },
  { name: "Schottland",     flag: "gb-sct", gruppe: "C", konfed: "UEFA" },

  // Gruppe D
  { name: "USA",            flag: "us", gruppe: "D", konfed: "CONCACAF (Gastgeber)" },
  { name: "Paraguay",       flag: "py", gruppe: "D", konfed: "CONMEBOL" },
  { name: "Australien",     flag: "au", gruppe: "D", konfed: "AFC" },
  { name: "Türkei",         flag: "tr", gruppe: "D", konfed: "UEFA" },

  // Gruppe E
  { name: "Deutschland",    flag: "de", gruppe: "E", konfed: "UEFA" },
  { name: "Curaçao",        flag: "cw", gruppe: "E", konfed: "CONCACAF" },
  { name: "Elfenbeinküste", flag: "ci", gruppe: "E", konfed: "CAF" },
  { name: "Ecuador",        flag: "ec", gruppe: "E", konfed: "CONMEBOL" },

  // Gruppe F
  { name: "Niederlande",    flag: "nl", gruppe: "F", konfed: "UEFA" },
  { name: "Japan",          flag: "jp", gruppe: "F", konfed: "AFC" },
  { name: "Schweden",       flag: "se", gruppe: "F", konfed: "UEFA" },
  { name: "Tunesien",       flag: "tn", gruppe: "F", konfed: "CAF" },

  // Gruppe G
  { name: "Belgien",        flag: "be", gruppe: "G", konfed: "UEFA" },
  { name: "Ägypten",        flag: "eg", gruppe: "G", konfed: "CAF" },
  { name: "Iran",           flag: "ir", gruppe: "G", konfed: "AFC" },
  { name: "Neuseeland",     flag: "nz", gruppe: "G", konfed: "OFC" },

  // Gruppe H
  { name: "Spanien",        flag: "es", gruppe: "H", konfed: "UEFA" },
  { name: "Kap Verde",      flag: "cv", gruppe: "H", konfed: "CAF" },
  { name: "Saudi-Arabien",  flag: "sa", gruppe: "H", konfed: "AFC" },
  { name: "Uruguay",        flag: "uy", gruppe: "H", konfed: "CONMEBOL" },

  // Gruppe I
  { name: "Frankreich",     flag: "fr", gruppe: "I", konfed: "UEFA" },
  { name: "Senegal",        flag: "sn", gruppe: "I", konfed: "CAF" },
  { name: "Irak",           flag: "iq", gruppe: "I", konfed: "AFC" },
  { name: "Norwegen",       flag: "no", gruppe: "I", konfed: "UEFA" },

  // Gruppe J
  { name: "Argentinien",    flag: "ar", gruppe: "J", konfed: "CONMEBOL" },
  { name: "Algerien",       flag: "dz", gruppe: "J", konfed: "CAF" },
  { name: "Österreich",     flag: "at", gruppe: "J", konfed: "UEFA" },
  { name: "Jordanien",      flag: "jo", gruppe: "J", konfed: "AFC" },

  // Gruppe K
  { name: "Portugal",       flag: "pt", gruppe: "K", konfed: "UEFA" },
  { name: "Kongo DR",       flag: "cd", gruppe: "K", konfed: "CAF" },
  { name: "Usbekistan",     flag: "uz", gruppe: "K", konfed: "AFC" },
  { name: "Kolumbien",      flag: "co", gruppe: "K", konfed: "CONMEBOL" },

  // Gruppe L
  { name: "England",        flag: "gb-eng", gruppe: "L", konfed: "UEFA" },
  { name: "Kroatien",       flag: "hr", gruppe: "L", konfed: "UEFA" },
  { name: "Ghana",          flag: "gh", gruppe: "L", konfed: "CAF" },
  { name: "Panama",         flag: "pa", gruppe: "L", konfed: "CONCACAF" },
];

function initTeams() {
  const container   = document.getElementById("teamsContainer");
  const searchInput = document.getElementById("searchTeam");
  const filterGruppe = document.getElementById("filterGruppe");

  if (!container) return;   // nur ausführen wenn wir auf teams.html sind

  function renderTeams() {
    const suche  = searchInput.value.toLowerCase();
    const gruppe = filterGruppe.value;

    const gefiltert = teams.filter(function (team) {
      const passtSuche  = team.name.toLowerCase().includes(suche);
      const passtGruppe = gruppe === "all" || team.gruppe === gruppe;
      return passtSuche && passtGruppe;
    });

    if (gefiltert.length === 0) {
      container.innerHTML = "<p>Kein Team gefunden.</p>";
      return;
    }

    container.innerHTML = gefiltert.map(function (team) {
      return `
        <div class="team-card">
          <img src="https://flagcdn.com/w80/${team.flag}.png" alt="Flagge ${team.name}" />
          <h3>${team.name}</h3>
          <p>Gruppe ${team.gruppe} · ${team.konfed}</p>
        </div>
      `;
    }).join("");
  }

  renderTeams();

  searchInput.addEventListener("input", renderTeams);
  filterGruppe.addEventListener("change", renderTeams);
}


/* QUIZ DATEN */

const quizQuestions = [

{
    question: "Wie viele Teams nehmen an der FIFA WM 2026 teil?",
    answers: ["32", "40", "48", "64"],
    correct: 2
},

{
    question: "Welche Länder richten die WM 2026 aus?",
    answers: [
        "USA, Kanada, Mexiko",
        "USA, Brasilien, Mexiko",
        "Kanada, Brasilien, Argentinien",
        "Mexiko, Spanien, USA"
    ],
    correct: 0
},

{
    question: "Wie viele Gruppen gibt es bei der WM 2026?",
    answers: ["8", "10", "12", "16"],
    correct: 2
},

{
    question: "Welches Land ist Titelverteidiger?",
    answers: [
        "Frankreich",
        "Argentinien",
        "Brasilien",
        "Deutschland"
    ],
    correct: 1
},

{
    question: "Wie viele Spiele werden insgesamt ausgetragen?",
    answers: ["64", "80", "92", "104"],
    correct: 3
},

{
    question: "In welcher Stadt findet das Finale statt?",
    answers: [
        "Los Angeles",
        "Dallas",
        "New York",
        "Toronto"
    ],
    correct: 2
}

];


/* QUIZ - mit Fortschrittsbalken & Zähler */

function initQuiz() {

    const questionElement = document.getElementById("question");
    if (!questionElement) return;

    const answerButtons = document.querySelectorAll(".answer-btn");
    const nextBtn = document.getElementById("nextBtn");
    const quizContainer = document.getElementById("quizContainer");
    const resultBox = document.getElementById("resultBox");
    const scoreText = document.getElementById("scoreText");

    // Fortschrittsbalken und Zähler
    const progressFill = document.getElementById("progressFill");
    const questionCounter = document.getElementById("questionCounter");

    let currentQuestion = 0;
    let score = 0;
    let answered = false;

    function showQuestion() {
        const current = quizQuestions[currentQuestion];

        // Frage anzeigen
        questionElement.textContent = current.question;

        // Fortschritt aktualisieren
        const progress = (currentQuestion / quizQuestions.length) * 100;
        if (progressFill) {
            progressFill.style.width = progress + "%";
        }
        if (questionCounter) {
            questionCounter.textContent = "Frage " + (currentQuestion + 1) + " von " + quizQuestions.length;
        }

        // Antwort-Buttons zurücksetzen
        answerButtons.forEach(function(btn, index) {
            btn.textContent = current.answers[index];
            btn.disabled = false;
            btn.classList.remove("correct", "wrong");
        });

        answered = false;
        nextBtn.disabled = true;
        nextBtn.style.opacity = "0.5";
    }

    // Antwort-Click mit addEventListener
    answerButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            if (answered) return;
            answered = true;

            const index = parseInt(btn.dataset.index);
            const current = quizQuestions[currentQuestion];

            // Alle Buttons deaktivieren
            answerButtons.forEach(function(b) {
                b.disabled = true;
            });

            // Richtige Antwort markieren
            answerButtons.forEach(function(b, i) {
                if (i === current.correct) {
                    b.classList.add("correct");
                }
            });

            // Benutzerantwort prüfen
            if (index === current.correct) {
                btn.classList.add("correct");
                score++;
            } else {
                btn.classList.add("wrong");
            }

            // Next-Button aktivieren
            nextBtn.disabled = false;
            nextBtn.style.opacity = "1";
        });
    });

    // Nächste Frage
    nextBtn.addEventListener("click", function() {
        currentQuestion++;

        if (currentQuestion < quizQuestions.length) {
            showQuestion();
        } else {
            // Quiz beendet
            quizContainer.style.display = "none";
            resultBox.style.display = "block";
            scoreText.textContent = "Du hast " + score + " von " + quizQuestions.length + " Fragen richtig beantwortet!";

            // Fortschrittsbalken auf 100%
            if (progressFill) {
                progressFill.style.width = "100%";
            }
            if (questionCounter) {
                questionCounter.textContent = "Frage " + quizQuestions.length + " von " + quizQuestions.length;
            }
        }
    });

    // Erste Frage anzeigen
    showQuestion();
}


/* ALLE FUNKTIONEN STARTEN */

document.addEventListener("DOMContentLoaded", function () {
  initTeams();  // Für die Teams-Seite
  initQuiz();   // Für die Quiz-Seite
});