// PNG EVENTS HUB - INTERACTIVE FEATURES
// MEMBER 2: CATEGORY FILTER & MEMBER 6: KEYWORD SEARCH

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const eventCards = document.querySelectorAll(".event-card");

  if (eventCards.length === 0) return;

  let currentCategory = "all";

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((filterButton) =>
        filterButton.classList.remove("active"),
      );
      button.classList.add("active");

      currentCategory = button.getAttribute("data-category") || "all";
      filterEvents();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", filterEvents);
  }

  function filterEvents() {
    const searchQuery = searchInput
      ? searchInput.value.toLowerCase().trim()
      : "";

    eventCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");
      const cardText = card.textContent.toLowerCase();
      const matchesCategory =
        currentCategory === "all" || cardCategory === currentCategory;
      const matchesSearch =
        searchQuery === "" || cardText.includes(searchQuery);

      card.classList.toggle("hidden", !(matchesCategory && matchesSearch));
    });
  }
});
