import { UsersService } from "./users";
import "./style.scss";

const allUsers = new UsersService("https://jsonplaceholder.typicode.com/users");
allUsers
  .getAllUsers()
  .then((list) => {
    console.log(list);
    allUsers.renderUsersList(list);
  })
  .catch((err) => {
    console.log(err);
  });
