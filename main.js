// Simple portfolio website - minimal JavaScript for any future enhancements
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scrolling for any future internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add focus management for accessibility
  const focusableElements = document.querySelectorAll(
    "a[href], button, input, textarea, select",
  );

  focusableElements.forEach((element) => {
    element.addEventListener("focus", function () {
      this.style.outline = "2px solid #60a5fa";
      this.style.outlineOffset = "2px";
    });

    element.addEventListener("blur", function () {
      this.style.outline = "none";
    });
  });
});
