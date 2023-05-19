(() => {
  const openButton = document.querySelector(".nav__menu");
  const menu = document.querySelector(".nav__link");
  const closeMenu = document.querySelector(".nav__close");
  const scrollButton = document.querySelector(".scrollTop");

  openButton.addEventListener("click", () => {
    menu.classList.add("nav__link--show");
    scrollButton.style.zIndex = -1;
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("nav__link--show");
    scrollButton.style.zIndex = 100;
  });

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".nav__items a")) return false;
    menu.classList.remove("nav__link--show");
    scrollButton.style.zIndex = 100;
  });
})();
