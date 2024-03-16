import "./style.css";
function UsersService(baseUrl) {
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
console.log("---------------Task1---------------");
// !TASK1
UsersService.prototype.renderUsersList = function (list) {
  list.forEach((value) => {
    const person = {
      id: `id: ${value.id}`,
      name: `Name: ${value.name}`,
      email: `Email: ${value.email}`,
      city: `City: ${value.address.city}`,
    };
    console.log(Object.values(person));
  });
  console.log("---------------Task2.1---------------");
  // !TASK2
  const simpleUsers = list.reduce((total, user) => {
    const { id, name, email, phone, company, address } = user;
    const { city } = address;
    const userObject = { id, name, email, phone, company: company.name };
    if (!total[city]) {
      total[city] = [];
    }
    total[city].push(userObject);

    return total;
  }, []);
  console.log(simpleUsers);

  // !Task2.2
  console.log("---------------Task2.2---------------");
  list.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  console.log(list);

  console.log("---------------Task2.3---------------");

  // !Task2.3
  const reducedUsers = list.map(({ id, name, phone }) => ({
    id,
    name,
    phone,
  }));
  console.log(reducedUsers);
};

const allUsers = new UsersService("https://jsonplaceholder.typicode.com/users");
allUsers
  .getAllUsers()
  .then((list) => {
    console.log(list);
    allUsers.renderUsersList(list);
  })
  .catch((err) => {
    // console.log(err);
  });
