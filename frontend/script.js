/*
  Minimal JavaScript for clean user interactions.
  The site should stay simple and recruiter-friendly, so only essential behavior is included.
*/

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const visitorCount = document.getElementById("visitor-count");

  // Toggle mobile navigation with accessible state updates.
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Smooth scrolling for internal navigation links.
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      const targetElement = targetId ? document.querySelector(targetId) : null;

      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Placeholder hook for a future visitor counter API.
  updateVisitorCounter(visitorCount);
});

function updateVisitorCounter(element) {
  if (!element) {
    return;
  }

  // This text will later be replaced by a real API response from AWS.
  element.textContent = "Visitor counter will be connected to AWS API Gateway + Lambda";
}
