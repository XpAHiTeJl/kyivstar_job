import "./style.scss";

// export function UsersService(baseUrl) {
//   this.baseUrl = baseUrl;
// }

// UsersService.prototype.getAllUsers = async function () {
//   try {
//     const response = await fetch(this.baseUrl);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data.users;
//   } catch (err) {
//     console.error("Error fetching users:", err);
//     return [];
//   }
// };

// UsersService.prototype.renderUsersList = function (list) {
//   const listelement = document.querySelector("#personal");

//   list.slice(0, 6).forEach((value) => {
//     const itemElement = document.createElement("div");
//     itemElement.classList.add("minimal-card");

//     itemElement.innerHTML = `
//       <figure>
//         <img class="p-3 rounded-5" style="max-width: 250px" src="https://api.lorem.space/image/face?w=320&h=320&r=${value.id}"/>
//         <figcaption class="minimal-info  ">
//           <strong> ${value.firstName}</strong>
//           <span class="text-secondary"> ${value.company.title}</span>
//         </figcaption>
//       </figure>
//     `;

//     listelement.appendChild(itemElement);
//   });

//   // !person

//   const graphicname = document.querySelector("#graphic-name");
//   const itemTerry = document.querySelector(".personTerry");

//   const itemSheldon = document.querySelector(".personSheldon");

//   const namesTerry = list.slice(0, 1).map((user) => user.firstName);
//   namesTerry.forEach((name) => {
//     itemTerry.innerHTML = `
//     <strong class="text-secondary"> ${name}</strong>
//     <p> Not so one-time payments</p>
//     <p> 9:00AM - 10:00AM PST</p>
//     `;
//     graphicname.appendChild(itemTerry);
//   });

//   const namesSheldon = list.slice(0, 2).map((user) => user.firstName);
//   namesSheldon.forEach((name) => {
//     itemSheldon.innerHTML = `
//     <strong class="text-secondary"> ${name}</strong>
//     <p> The finer print</p>
//     <p> 10:00AM - 11:00AM PST</p>
//     `;
//     graphicname.appendChild(itemSheldon);
//   });
// };

// const allUsers = new UsersService("https://dummyjson.com/users");
// allUsers
//   .getAllUsers()
//   .then((list) => {
//     console.log(list);
//     allUsers.renderUsersList(list);
//   })
//   .catch((err) => {
//     // console.error("Error rendering user list:", err);
//   });

class UserList {
  constructor() {
    this.url = "https://dummyjson.com/users";
    this.users = [];
  }

  async fetchUsers() {
    const response = await fetch(this.url);
    const data = await response.json();
    this.users = data.users;
  }

  generateHTML() {
    let html = "";
    for (const user of this.users.slice(0, 6)) {
      html += `<li class="minimal-info pt-4 ">
                  <img class="p-3  rounded-5" style="max-width: 230px" src="https://api.lorem.space/image/face?w=320&h=320&r=${user.id}"/>
                  <h5 class="ps-3">${user.firstName} ${user.lastName}</h5>
                  <p class="ps-3 text-secondary">${user.company.department}</p>
              </li>`;
    }
    return html;
  }

  async render() {
    await this.fetchUsers();
    const html = this.generateHTML();
    document.getElementById("personal").innerHTML = html;
  }
}

const userList = new UserList();
userList.render();
// !Person drop-Main-data
class TerryNamesList {
  constructor() {
    this.userList = new UserList();
  }

  async renderNames() {
    await this.userList.fetchUsers();

    const firstUser = this.userList.users[0];
    const firstName = firstUser.firstName;
    const lastName = firstUser.lastName;
    const nameHTML = `<p class="blue-text">${firstName} ${lastName}</p>`;

    const existingContent = document.querySelector(".personTerry").innerHTML;
    const combinedHTML = `${nameHTML} ${existingContent} `;
    document.querySelector(".personTerry").innerHTML = combinedHTML;
  }
}
const TerryNames = new TerryNamesList();
TerryNames.renderNames();

class SheldonNamesList {
  constructor() {
    this.userList = new UserList();
  }

  async renderNames() {
    await this.userList.fetchUsers();

    const firstUser = this.userList.users[1];
    const firstName = firstUser.firstName;
    const lastName = firstUser.lastName;
    const nameHTML = `<p class="blue-text">${firstName} ${lastName}</p>`;

    const existingContent = document.querySelector(".personSheldon").innerHTML;
    const combinedHTML = `${nameHTML} ${existingContent} `;
    document.querySelector(".personSheldon").innerHTML = combinedHTML;
  }
}
const SheldonNames = new SheldonNamesList();
SheldonNames.renderNames();

class threeNamesList {
  constructor() {
    this.userList = new UserList();
  }

  async renderNames() {
    await this.userList.fetchUsers();

    const firstUser = this.userList.users[2];
    const firstName = firstUser.firstName;
    const lastName = firstUser.lastName;
    const nameHTML = `<p class="blue-text">${firstName} ${lastName}</p>`;

    const existingContent = document.querySelector(".person3").innerHTML;
    const combinedHTML = `${nameHTML} ${existingContent} `;
    document.querySelector(".person3").innerHTML = combinedHTML;
  }
}
const threeNames = new threeNamesList();
threeNames.renderNames();

class fourNamesList {
  constructor() {
    this.userList = new UserList();
  }

  async renderNames() {
    await this.userList.fetchUsers();

    const firstUser = this.userList.users[3];
    const firstName = firstUser.firstName;
    const lastName = firstUser.lastName;
    const nameHTML = `<p class="blue-text">${firstName} ${lastName}</p>`;

    const existingContent = document.querySelector(".person4").innerHTML;
    const combinedHTML = `${nameHTML} ${existingContent} `;
    document.querySelector(".person4").innerHTML = combinedHTML;
  }
}
const fourNames = new fourNamesList();
fourNames.renderNames();

class fiveNamesList {
  constructor() {
    this.userList = new UserList();
  }

  async renderNames() {
    await this.userList.fetchUsers();

    const firstUser = this.userList.users[4];
    const firstName = firstUser.firstName;
    const lastName = firstUser.lastName;
    const nameHTML = `<p class="blue-text">${firstName} ${lastName}</p>`;

    const existingContent = document.querySelector(".person5").innerHTML;
    const combinedHTML = `${nameHTML} ${existingContent} `;
    document.querySelector(".person5").innerHTML = combinedHTML;
  }
}
const fiveNames = new fiveNamesList();
fiveNames.renderNames();

class sixNamesList {
  constructor() {
    this.userList = new UserList();
  }

  async renderNames() {
    await this.userList.fetchUsers();

    const firstUser = this.userList.users[5];
    const firstName = firstUser.firstName;
    const lastName = firstUser.lastName;
    const nameHTML = `<p class="blue-text">${firstName} ${lastName}</p>`;

    const existingContent = document.querySelector(".person6").innerHTML;
    const combinedHTML = `${nameHTML} ${existingContent} `;
    document.querySelector(".person6").innerHTML = combinedHTML;
  }
}
const sixNames = new sixNamesList();
sixNames.renderNames();

class sevenNamesList {
  constructor() {
    this.userList = new UserList();
  }

  async renderNames() {
    await this.userList.fetchUsers();

    const firstUser = this.userList.users[6];
    const firstName = firstUser.firstName;
    const lastName = firstUser.lastName;
    const nameHTML = `<p class="blue-text">${firstName} ${lastName}</p>`;

    const existingContent = document.querySelector(".person7").innerHTML;
    const combinedHTML = `${nameHTML} ${existingContent} `;
    document.querySelector(".person7").innerHTML = combinedHTML;
  }
}
const sevenNames = new sevenNamesList();
sevenNames.renderNames();

class eightNamesList {
  constructor() {
    this.userList = new UserList();
  }

  async renderNames() {
    await this.userList.fetchUsers();

    const firstUser = this.userList.users[7];
    const firstName = firstUser.firstName;
    const lastName = firstUser.lastName;
    const nameHTML = `<p class="blue-text">${firstName} ${lastName}</p>`;

    const existingContent = document.querySelector(".person8").innerHTML;
    const combinedHTML = `${nameHTML} ${existingContent} `;
    document.querySelector(".person8").innerHTML = combinedHTML;
  }
}
const eightNames = new eightNamesList();
eightNames.renderNames();

class nineNamesList {
  constructor() {
    this.userList = new UserList();
  }

  async renderNames() {
    await this.userList.fetchUsers();

    const firstUser = this.userList.users[8];
    const firstName = firstUser.firstName;
    const lastName = firstUser.lastName;
    const nameHTML = `<p class="blue-text">${firstName} ${lastName}</p>`;

    const existingContent = document.querySelector(".person9").innerHTML;
    const combinedHTML = `${nameHTML} ${existingContent} `;
    document.querySelector(".person9").innerHTML = combinedHTML;
  }
}
const nineames = new nineNamesList();
nineames.renderNames();

// !mail send

class EmailForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.emailInput = formElement.querySelector('input[type="email"]');
    this.submitButton = formElement.querySelector("button");

    this.submitButton.addEventListener("click", this.onSubmit.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();

    const email = this.emailInput.value;

    // Валидация email

    if (!email.trim()) {
      alert("Введіть email");
      return;
    }

    // Отправка email методом POST

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://otpravka.pochta.ru/");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(`email=${email}`);

    xhr.onload = () => {
      if (xhr.status === 200) {
        alert("Email успішно відправлено!");
      } else {
        alert("Помилка при відправці email!");
      }
    };
  }
}

const formElement = document.querySelector(".email-form");
const emailForm = new EmailForm(formElement);
