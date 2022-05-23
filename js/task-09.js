function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
const colorName = document.querySelector('.color');

const randomColor = btn.addEventListener('click', () => {
  bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
  colorName.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});
