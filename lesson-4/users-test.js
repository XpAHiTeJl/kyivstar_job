export function UsersService(baseUrl) {
  this.baseUrl = baseUrl;
}

UsersService.prototype.getAllUsers = async function () {
  try {
    const response = await fetch(this.baseUrl);
    const data = response.json();
    return data;
  } catch (err) {
    console.erroe("Ошибка", err);
    return [];
  }
};

UsersService.prototype.getUserById = async function (id) {
  try {
    const response = await fetch(`${this.baseUrl}/${id}`);
    const data = response.json();
    return data;
  } catch (err) {
    console.erroe("Ошибка получение ИД", err);
    return [];
  }
};

UsersService.prototype.renderUsersList = function (list) {
  const listelement = document.querySelector("#message-list");

  list.forEach((value) => {
    const itemElement = document.createElement("li");
    const imgUrlParams = new URLSearchParams({ w: 120, h: 120 });
    imgUrlParams.append("r", value.id);

    itemElement.innerHTML = `
    <figure>
      <img src="https://api.lorem.space/image/face?${imgUrlParams.toString()}"/>
      <figcaption>
        <span> ${value.name}</span>
        <strong> ${value.company.name}</strong>
      </figcaption>
    
    </figure>
    `;
    const AditionalData = async () => {
      itemElement.removeEventListener("click", AditionalData);
      const tetailItem = document.createElement("p");
      tetailItem.textContent = "Loading...";
      itemElement.appendChild(tetailItem);

      const detail = await this.getUserById(value.id);
      tetailItem.textContent = detail.username;
    };
    itemElement.addEventListener("click", AditionalData);

    listelement.appendChild(itemElement);
  });
};

// const allUsers = new UsersService("https://jsonplaceholder.typicode.com/users");
// allUsers
//   .getAllUsers()
//   .then((list) => {
//     console.log(list);
//     allUsers.renderUsersList(list);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
