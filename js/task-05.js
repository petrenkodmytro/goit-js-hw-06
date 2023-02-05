const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

//-----1------
// input.addEventListener("input", (event) => {
//   console.log(event.currentTarget.value);
//   span.textContent = event.currentTarget.value;
//   if (event.currentTarget.value === "") {
//     span.textContent = "Anonymous";
//   }
// });

//-----2-----
const getInputValue = (event) => {
  console.log(event.currentTarget.value);
  event.currentTarget.value === "" 
  ? (span.textContent = "Anonymous") 
  : (span.textContent = event.currentTarget.value);
};

input.addEventListener("input", getInputValue);

// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
