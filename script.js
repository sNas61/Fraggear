document.getElementById("shopNow").addEventListener("click", function () {
  document.getElementById("mouse").scrollIntoView({ behavior: "smooth" });
});

const backButton = document.getElementById("backButton");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
});

backButton.addEventListener("click", () => {
  document.querySelector(".hero").scrollIntoView({ behavior: "smooth" });
});
