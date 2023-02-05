const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const spanRef = document.querySelector("#value");

let counterValue = 0;

decrementRef.addEventListener("click", () => {
  counterValue -= 1;
  console.log(counterValue);
  spanRef.textContent = counterValue;
});

incrementRef.addEventListener("click", () => {
  counterValue += 1;
  console.log(counterValue);
  spanRef.textContent = counterValue;
});

// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
