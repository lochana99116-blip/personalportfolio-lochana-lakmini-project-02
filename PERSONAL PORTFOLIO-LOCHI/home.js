// SCROLL ANIMATION (fade in sections)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(
  ".card, .hero-text, .hero-image, .type-card",
);

hiddenElements.forEach((el) => observer.observe(el));

// BUTTON HOVER ANIMATION
document.querySelectorAll(".cta-btn, .hero-btn").forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
});

// PROFILE IMAGE FLOAT ANIMATION
const img = document.querySelector(".hero-image img");

setInterval(() => {
  if (img) {
    img.style.transform = "translateY(-10px)";
    setTimeout(() => {
      img.style.transform = "translateY(0px)";
    }, 800);
  }
}, 2000);

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".hero-text, .hero-image");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("active");
          }, index * 100); // stagger effect
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  elements.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
});

// Card Click Animation
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card, .type-card");

  cards.forEach((card) => {
    card.addEventListener("click", function (e) {
      // Add click animation class
      this.classList.add("clicked");

      // Remove after animation
      setTimeout(() => {
        this.classList.remove("clicked");
      }, 200);
    });
  });
});
