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

  // !person

  const graphicname = document.querySelector("#graphic-name");
  const itemTerry = document.querySelector(".personTerry");

  const itemSheldon = document.querySelector(".personSheldon");

  const namesTerry = list.slice(0, 1).map((user) => user.firstName);
  namesTerry.forEach((name) => {
    itemTerry.innerHTML = `
    <strong class="text-secondary"> ${name}</strong>
    <p> Not so one-time payments</p>
    <p> 9:00AM - 10:00AM PST</p>
    `;
    graphicname.appendChild(itemTerry);
  });

  const namesSheldon = list.slice(0, 2).map((user) => user.firstName);
  namesSheldon.forEach((name) => {
    itemSheldon.innerHTML = `
    <strong class="text-secondary"> ${name}</strong>
    <p> The finer print</p>
    <p> 10:00AM - 11:00AM PST</p>
    `;
    graphicname.appendChild(itemSheldon);
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
