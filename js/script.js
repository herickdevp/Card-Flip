new SimpleAnime();

const virar = document.querySelector(".flipper");

function virarAoClick() {
  virar.classList.toggle("flip");
  console.log(virar);
}

// A função passada é chamada de callback
virar.addEventListener("click", virarAoClick);
