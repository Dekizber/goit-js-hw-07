function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxEl = document.querySelector('#boxes');

const createEl = document.querySelector('[data-create]').addEventListener('click', () => {
  const inputEl = document.querySelector('#controls input');
  const amount = inputEl.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = '';
  }
});

const destroyEl = document.querySelector('[data-destroy]').addEventListener('click', () => {
  boxEl.innerHTML = '';
});

function createBoxes(amount) {
  let createBoxDiv = '';

  for (let i = 0; i < amount; i += 1) {
    const divSize = 30 + 10 * i;
    const colorOfBox = getRandomHexColor();
    createBoxDiv += `<div style="width: ${divSize}px; height: ${divSize}px; background-color: ${colorOfBox};"></div>`;
  }

  boxEl.innerHTML = createBoxDiv;
}
