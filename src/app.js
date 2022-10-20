const barButton = document.getElementById("bar");
const navList = document.getElementById("nav-list");

function toggleButton() {
  navList.classList.toggle("show");
}

barButton.addEventListener("click", toggleButton);
