const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //деструктуризація змінних email та password з об'єкта form.elements
  const { email, password } = form.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    const user = {
      [email.name]: email.value,
      [password.name]: password.value,
    };

    console.log(user);

    event.currentTarget.reset();
  }
});

// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// const form = document.querySelector(".login-form");
// console.log(form.elements);
// form.addEventListener("submit", (event) => {
// event.preventDefault();
//   if (form.elements.email.value === "" || form.elements.password.value === "") {
// alert("Всі поля повинні бути заповнені");
//   } else {
// const user = {
//   console.log(event.currentTarget[0].value);
//   console.log(form.elements.email.value);
//   console.log(event.currentTarget[1].value);
//   console.log(form.elements.password.value);
// ім'я поля буде ім'ям властивості, а значення поля - значенням властивості
//   [form.elements[0].name]: form.elements.email.value,
//   [form.elements[1].name]: form.elements.password.value,
// };
// console.log(user);
// event.currentTarget.reset();
//   }
// });