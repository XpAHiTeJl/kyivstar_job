function LocalStorageManager() {}

LocalStorageManager.prototype.saveData = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

LocalStorageManager.prototype.getData = function (key) {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

const localStorageManager = new LocalStorageManager();

localStorageManager.saveData("user", { name: "John", age: 30 });

const userData = localStorageManager.getData("user");
console.log(userData);
