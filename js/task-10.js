function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Создай функцию createBoxes(amount), которая принимает
// один параметр - число.Функция создает столько < div >,
// сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего
// на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

const btnCreate = document.querySelector('button[data-create]');
console.log(btnCreate);
const btnDestroy = document.querySelector('button[data-destroy]');
console.log(btnDestroy);
const amount = document.querySelector('input');
console.log(amount);
const boxContainer = document.querySelector('#boxes');
console.log(boxContainer);

function createBoxes(amount) {
  const box = document.createElement('div');

  boxContainer.append(box);
}

btnCreate.addEventListener('click', createBoxes);

// const create = () => {
//   counterValue += 1;
//   value.textContent = counterValue;
// };
// btnPlus.addEventListener('click', create);

// Задаю стартовые ширину и высоту Стайлом. Количество дивов выбираю инпутом.
// Перебором черех Фор. Пока И будет меньше значения Емаунт - увеличиваю длину, ширину и цвет.
// Посмотри на 2 задачу. Пригодиться. Используй Аппенд
// Создай массив пустой и добавляй туда каждый новый бокс.
