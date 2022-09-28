((d) => {
  const formFooter = d.querySelector(".footer__form");

  formFooter.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/tuemail@dominio.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        formFooter.querySelector("h2").innerHTML = `Gracias !!!`;
        formFooter.reset();
      })
      .catch((err) => {
        let messaje =
          err.stsusText || "Ocurrio un error al enviar, intenta nuevamente.";
        formFooter.querySelector(
          "h2"
        ).innerHTML = `Error ${err.status}: ${messaje}`;
      })
      .finally(() => {
        setTimeout(() => {
          formFooter.querySelector(
            "h2"
          ).innerHTML = `Suscribete a la newsletter`;
        }, 3000);
      });
  });
})(document);
