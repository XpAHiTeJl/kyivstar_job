import "./style.scss";

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
  const chatinfo = document.querySelector("#chat-info");

  list.forEach((value) => {
    const addressString = `${value.address.street}, ${value.address.suite}, ${value.address.city}, ${value.address.zipcode}`;

    const itemElement = document.createElement("li");
    const imgUrlParams = new URLSearchParams({ w: 120, h: 120 });
    imgUrlParams.append("r", value.id);

    itemElement.innerHTML = `
    <figure class="minimal-card">
      <img src="https://api.lorem.space/image/face?${imgUrlParams.toString()}"/>
      <figcaption class="minimal-info">
        <strong> ${value.name}</strong>
        <span> Company: ${value.company.name}</span>
      </figcaption>
    
    </figure>
    `;

    const AditionalData = async () => {
      //   itemElement.removeEventListener("click", AditionalData);

      const tetailItem = document.createElement("div");
      tetailItem.className = "chat-person";
      tetailItem.textContent = "Loading...";
      const namechat = document.querySelector(".chat-person");
      if (namechat) {
        namechat.remove();
      }
      console.log(namechat);

      chatinfo.appendChild(tetailItem);

      const detail = await this.getUserById(value.id);
      console.log(value.id);

      tetailItem.innerHTML = `
        <figure class="minimal-card">
            <img src="https://api.lorem.space/image/face?${imgUrlParams.toString()}"/>
            <figcaption class="minimal-info">
                <strong> ${detail.name}</strong>
                <span> Username: ${detail.username}</span>
            </figcaption>
        </figure>
        <div class="card-person-info">

            <div class="category">
                 <p >Company: </p>
                 <p >Phone:</p>
                 <p >Email:</p>
                 <p >Address:</p>
            </div>

            <div class="category-value">
                <p>${detail.company.name}</p>
                <p>${detail.phone}</p>
                <p>${detail.email}</p>
                <p>${addressString}</p>
            </div>
                
        </div>
      `;
    };

    itemElement.addEventListener("click", AditionalData);

    listelement.appendChild(itemElement);
  });
};
