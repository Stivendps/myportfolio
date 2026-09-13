function toggleAcc(button) {
  const allAccordions = document.querySelectorAll(".acc-content");

  const content = button.nextElementSibling;
  const icon = button.querySelector("span");

  const isOpen = !content.classList.contains("max-h-0");

  // CERRAR TODOS
  allAccordions.forEach(acc => {
    acc.classList.add("max-h-0");
    acc.classList.remove("max-h-[700px]");
    const btn = acc.previousElementSibling;
    if (btn) btn.querySelector("span").textContent = "+";
  });

  // ABRIR SOLO SI ESTA CERRADO
  if (!isOpen) {
    content.classList.remove("max-h-0");
    content.classList.add("max-h-[700px]");
    icon.textContent = "−";
  }
}

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(navLink => navLink.classList.remove("active"));
    link.classList.add("active");
  });
});

document.querySelector('.nav-link[href="#inicio"]')?.classList.add("active");

// const animatedElements = document.querySelectorAll(
//   ".profile-photo, [href*='drive.google.com'], #experiencia > div, #proyectos .animate-scroll > div, #skills span"
// );

animatedElements.forEach((element, index) => {
  element.classList.add("reveal-on-scroll");
  element.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

animatedElements.forEach(element => revealObserver.observe(element));

// okok