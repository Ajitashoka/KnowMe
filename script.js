// script.js

document.addEventListener("DOMContentLoaded", () => {
    fadeInOnScroll();
    setupScrollTopButton();
  });
  
  function fadeInOnScroll() {
    const cards = document.querySelectorAll(".card");
  
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );
  
    cards.forEach(card => observer.observe(card));
  }
  
  function setupScrollTopButton() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
  
    if (!scrollTopBtn) return;
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });
  
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  