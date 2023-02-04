const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listOfIngredientsRef = document.querySelector("#ingredients");
console.log(listOfIngredientsRef);

const itemOfListRef = ingredients.map((element) => {
  const itemLiRef = document.createElement("li");
  itemLiRef.textContent = element;
  itemLiRef.classList.add("item");
  console.log(itemLiRef);
  return itemLiRef;
});
console.log(itemOfListRef);

listOfIngredientsRef.append(...itemOfListRef);

// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
