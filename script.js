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
});
