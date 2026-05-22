// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// PAGE LOAD ANIMATION

window.addEventListener("load", () => {
  // HERO IMAGE
  const heroImage = document.querySelector(".hero-image");
  if (heroImage) {
    setTimeout(() => heroImage.classList.add("animate"), 300);
  }

  // HERO CONTENT
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    setTimeout(() => heroContent.classList.add("animate"), 500);
  }

  // NAV ITEMS
  const navItems = document.querySelectorAll(".nav-links li");

  navItems.forEach((item, index) => {
    setTimeout(
      () => {
        item.classList.add("animate");
      },
      150 + index * 120,
    );
  });
});

// TEXT + BUTTON ANIMATION

window.addEventListener("load", () => {
  const items = document.querySelectorAll(
    ".hero-content h1, .hero-content p, .btn-group",
  );

  items.forEach((el, index) => {
    setTimeout(
      () => {
        el.classList.add("animate");
      },
      700 + index * 200,
    );
  });
});

// FOOTER SCROLL ANIMATION

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document.querySelectorAll(".footer").forEach((el) => {
  observer.observe(el);
});

window.addEventListener("load", () => {
  const footer = document.querySelector(".footer");
  setTimeout(() => {
    footer.classList.add("animate");
  }, 1000);
});
