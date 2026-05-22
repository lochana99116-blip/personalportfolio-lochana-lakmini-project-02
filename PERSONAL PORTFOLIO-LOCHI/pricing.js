
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

  // HERO TEXT
  const hero = document.querySelector(".hero");
  if (hero) hero.classList.add("animate");

  // PRICING CARDS
  const cards = document.querySelectorAll(".pricing-card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("animate");
    }, 200 + index * 150);
  });

  // SECTION TITLE
  const titles = document.querySelectorAll(".section-title, .section-subtitle");

  titles.forEach((t, i) => {
    setTimeout(() => {
      t.classList.add("animate");
    }, 300 + i * 200);
  });

  // CUSTOM BOX
  const customBox = document.querySelector(".custom-box");
  if (customBox) {
    setTimeout(() => {
      customBox.classList.add("animate");
    }, 800);
  }

  // FOOTER
  const footer = document.querySelector(".footer");
  if (footer) {
    setTimeout(() => {
      footer.classList.add("animate");
    }, 1000);
  }

});



// SCROLL REVEAL (SAFER VERSION)

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, {
  threshold: 0.2
});

// observe cards + sections
document.querySelectorAll(
  ".pricing-card, .custom-box, .section-title, .section-subtitle"
).forEach(el => {
  observer.observe(el);
});



// BUTTON HOVER ENHANCEMENT (OPTIONAL)

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btn.style.transform = `translateY(-5px)`;
    btn.style.boxShadow = "0 12px 25px rgba(0,0,0,0.25)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
    btn.style.boxShadow = "";
  });
});


// BUTTON RIPPLE (FIXED)


document.querySelectorAll(".btn").forEach(btn => {

  btn.addEventListener("click", function (e) {

    const ripple = document.createElement("span");

    const rect = btn.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.classList.add("ripple");
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    btn.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

  });

});


// BUTTON PAGE LOAD ANIMATION CONTROL


window.addEventListener("load", () => {

  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((btn, index) => {

    setTimeout(() => {
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
    }, index * 150);

  });

});