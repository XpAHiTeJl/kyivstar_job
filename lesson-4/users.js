function UsersService(baseUrl) {
  this.baseUrl = baseUrl;
}

UsersService.prototype.getAllUsers = async function () {
  const response = await fetch(this.baseUrl);
  return response;
};

const allUsers = new UsersService("https://jsonplaceholder.typicode.com/users");

allUsers
  .getAllUsers()
  .then((response) => response.json())
  .then((list) => {
    console.log(list);
  })
  .catch((err) => {
    console.log("error");
  });

UsersService.prototype.getUserById = async function (id) {
  /**
   * Ваш код для отримання юзера по id з сервера
   * async/await, fetch, try/catch, ...
   *
   * (!) https://jsonplaceholder.typicode.com/users/<id>
   */
};

UsersService.prototype.renderUsersList = function (list) {
  /**
   *
   * Ваш код для рендерингу списку юзерів
   * createElement, appendChild, forEach, ...
   *
   *
   * Кожен елемент списка повинен відображати такі властивості:
   * name
   * company.name
   *
   * а також очікується обробник події click на кожнмоу елементі списка для відправки запита із обраним id користувача
   * для отримання і виведення інформації по ньому.
   */
};

// function getAllUsers() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//       const users = data;
//       const userList = document.getElementById("user-list");
//       userList.innerHTML = "";
//       users.forEach((user) => {
//         const listItem = document.createElement("li");
//         listItem.textContent = `${user.name} - Company:${user.company.name}`;
//         userList.appendChild(listItem);
//       });
//     })
//     .catch((error) => {
//       console.error("Ошибка:", error);
//     });
// }
// getAllUsers();
