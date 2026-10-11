/* ===== FAQ ACCORDION (Member 4) =====
   Paste into js/script.js. Safe on pages without a FAQ. */

document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(function (button) {
        button.addEventListener("click", function () {
            const answer = document.getElementById(button.getAttribute("aria-controls"));
            const isOpen = button.getAttribute("aria-expanded") === "true";

            // Close every other answer so only one is open at a time
            questions.forEach(function (other) {
                other.setAttribute("aria-expanded", "false");
                document.getElementById(other.getAttribute("aria-controls")).hidden = true;
            });

            // Toggle the one that was clicked
            if (!isOpen) {
                button.setAttribute("aria-expanded", "true");
                answer.hidden = false;
            }
        });
    });
});

// ===== Member 6: Event search =====
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('event-search');
  if (!searchInput) return; // this page has no search box

  const searchForm = document.getElementById('search-form');
  const clearButton = document.getElementById('search-clear');
  const statusText = document.getElementById('search-status');
  const noResults = document.getElementById('no-results');
  const cards = document.querySelectorAll('.event-card'); // Member 2's cards

  function runSearch() {
    const keyword = searchInput.value.trim().toLowerCase();
    let matches = 0;

    cards.forEach(function (card) {
      const found = card.textContent.toLowerCase().includes(keyword);
      card.classList.toggle('search-hidden', !found);
      if (found) matches++;
    });

    noResults.hidden = matches !== 0;
    statusText.textContent = keyword
      ? matches + ' event(s) found for "' + searchInput.value.trim() + '"'
      : '';

    try { localStorage.setItem('lastEventSearch', searchInput.value.trim()); } catch (e) {}
  }

  searchInput.addEventListener('input', runSearch);

  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    runSearch();
  });

  clearButton.addEventListener('click', function () {
    searchInput.value = '';
    runSearch();
    searchInput.focus();
  });

  // Start with a keyword from the link (events.html?q=music), or the last search
  const urlKeyword = new URLSearchParams(window.location.search).get('q');
  let saved = '';
  try { saved = localStorage.getItem('lastEventSearch') || ''; } catch (e) {}
  searchInput.value = urlKeyword !== null ? urlKeyword : saved;
  runSearch();
});