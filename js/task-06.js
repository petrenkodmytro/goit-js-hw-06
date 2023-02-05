const input = document.querySelector("#validation-input");

//отримання значення атрибута
//console.log(Number(input.dataset.length));
//console.log(Number(input.getAttribute("data-length")));

const onInputBorderBlur = (event) => {
  console.log(event.currentTarget.value.length);
  if (Number(input.dataset.length) === event.currentTarget.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else if (event.currentTarget.value.length === 0) {
    input.classList.remove("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", onInputBorderBlur);

// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
