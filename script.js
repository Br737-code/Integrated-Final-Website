// PNG EVENTS HUB - INTERACTIVE FEATURES
// MILESTONE 1: SCRIPT INITIALIZATION & DOM SELECTION

document.addEventListener("DOMContentLoaded", () => {
  // DOM element selections
  const searchInput = document.getElementById("searchInput");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const eventCards = document.querySelectorAll(".event-card");

  // Exit if the current page has no event cards.
  if (eventCards.length === 0) return;

  console.log(
    "Events Hub script loaded. Found " + eventCards.length + " cards.",
  );

  let currentCategory = "all";

  // Category button click handling (Member 2)
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((filterButton) =>
        filterButton.classList.remove("active"),
      );
      button.classList.add("active");

      currentCategory = button.getAttribute("data-category") || "all";

      eventCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        const matchesCategory =
          currentCategory === "all" || cardCategory === currentCategory;
        card.classList.toggle("hidden", !matchesCategory);
      });
    });
  });
});
