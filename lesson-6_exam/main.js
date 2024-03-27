import "./style.scss";

export function UsersService(baseUrl) {
  this.baseUrl = baseUrl;
}

UsersService.prototype.getAllUsers = async function () {
  try {
    const response = await fetch(this.baseUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.users;
  } catch (err) {
    console.error("Error fetching users:", err);
    return [];
  }
};

UsersService.prototype.renderUsersList = function (list) {
  const listelement = document.querySelector("#personal");

  list.slice(0, 6).forEach((value) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("minimal-card");

    itemElement.innerHTML = `
      <figure>
        <img class="p-3 rounded-5" style="max-width: 250px" src="https://api.lorem.space/image/face?w=320&h=320&r=${value.id}"/>
        <figcaption class="minimal-info  ">
          <strong> ${value.firstName}</strong>
          <span class="text-secondary"> ${value.company.title}</span>
        </figcaption>
      </figure>
    `;

    listelement.appendChild(itemElement);
  });
};

const allUsers = new UsersService("https://dummyjson.com/users");
allUsers
  .getAllUsers()
  .then((list) => {
    console.log(list);
    allUsers.renderUsersList(list);
  })
  .catch((err) => {
    // console.error("Error rendering user list:", err);
  });
