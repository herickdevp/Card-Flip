new SimpleAnime();

const virar = document.querySelector(".flipper");

function virarAoClick() {
  virar.classList.toggle("flip");
}

// A função passada é chamada de callback
virar.addEventListener("click", virarAoClick);
