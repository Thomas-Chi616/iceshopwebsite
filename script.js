document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("active"));
    });
  }

  const tabButtons = document.querySelectorAll(".tab-btn");
  const categories = document.querySelectorAll(".menu-category");
  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;
      tabButtons.forEach(btn => btn.classList.remove("active"));
      categories.forEach(category => category.classList.remove("active"));
      button.classList.add("active");
      const targetCategory = document.getElementById(target);
      if (targetCategory) targetCategory.classList.add("active");
    });
  });

  const fadeItems = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  fadeItems.forEach(item => observer.observe(item));
});
