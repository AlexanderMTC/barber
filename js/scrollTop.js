(() => {
  const scrollButton = document
    .querySelector(".scrollTop")
    .addEventListener("click", (e) => {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    });
})();
