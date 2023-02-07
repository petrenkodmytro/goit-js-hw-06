function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const btnRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

btnRef.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  spanRef.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}

//Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
//Для генерування випадкового кольору використовуй функцію getRandomHexColor.