let frukter = [
  "banan", "äpple", "kiwi", "melon", "citron"
];

let sortedFrukt = frukter.sort()

const listElement = document.querySelector('#lista');


sortedFrukt.forEach(frukt => {
  const li = document.createElement('li');

  // li.style.color = "orange"
  li.classList.add('background')
  li.textContent = frukt

  listElement.appendChild(li)
})