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
