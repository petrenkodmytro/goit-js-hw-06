const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

span.style.fontSize = "50px";

input.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);
  span.style.fontSize = `${event.currentTarget.value}px`;
});

// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// console.log(input.getAttribute("min"));
// console.log(input.getAttribute("max"));