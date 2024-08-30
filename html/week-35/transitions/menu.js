window.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-list > li');
  navItems.forEach(item => {
    item.classList.add('transition')
  })
})

const listElements = document.querySelectorAll("li");
const liWithoutClass = Array.from(listElements).filter((li) => !li.id);

const toggleButton = document.querySelector("#toggle-button");
toggleButton.addEventListener("click", showHide);

console.log(liWithoutClass);
function showHide() {
  for (const element of liWithoutClass) {
    if (element.classList.contains("show")) {
      element.classList.remove("show");
      element.classList.add("hide");
    } else {
      element.classList.remove("hide");
      element.classList.add("show");
    }
  }

  toggleButton.classList.toggle("flex");
  // vad händer med knappen i mobil läge?

  if (toggleButton.textContent === "Göm meny") {
    toggleButton.textContent = "Visa meny";
  } else {
    toggleButton.textContent = "Göm meny";
  }
}
