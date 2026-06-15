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