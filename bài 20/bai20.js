const photo = document.getElementById("photo");
const buttons = document.querySelectorAll(".toolbar button");

function chooseEffect(button) {
  photo.className = "effect-" + button.dataset.effect;
  buttons.forEach(function (b) {
    b.classList.remove("active");
  });
  button.classList.add("active");
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    chooseEffect(button);
  });
});