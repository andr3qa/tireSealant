const accordions = document.querySelectorAll(".question__item");

const openAccordion = (accordion) => {
  const content = accordion.querySelector(".question__p");
  accordion.classList.add("question__item_active");
  content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
  const content = accordion.querySelector(".question__p");
  accordion.classList.remove("question__item_active");
  content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
  const intro = accordion.querySelector(".question__title");
  const content = accordion.querySelector(".question__p");

  intro.onclick = () => {
    if (content.style.maxHeight) {
      closeAccordion(accordion);
    } else {
      accordions.forEach((accordion) => closeAccordion(accordion));
      openAccordion(accordion);
    }
  };
});
