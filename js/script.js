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
