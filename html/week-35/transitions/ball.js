const loadBall = () => {
  const f = document.getElementById("foo");
  const fButton = document.getElementById("foo-button");
  const ballContent = document.getElementById("ball-content");

  if (f.classList.contains("ball")) {
    f.classList.remove("ball");
    ballContent.classList.toggle("hide")
    fButton.textContent = "Ladda bollen";
  } else {
    f.classList.add("ball");
    ballContent.classList.toggle("hide")
    fButton.textContent = "Stoppa spelet"
  }

  document.addEventListener(
    "click",
    (ev) => {
      f.style.transform = `translateY(${ev.clientY - 25}px)`;
      f.style.transform += `translateX(${ev.clientX - 25}px)`;
    },
    false,
  );
};