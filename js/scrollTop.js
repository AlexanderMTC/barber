(() => {
  const scrollButton = document.querySelector(".scrollTop");

  scrollButton.addEventListener("click", (e) => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  });

  window.addEventListener("scroll", (e) => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 500) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });
})();
