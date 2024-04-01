import "./style.css";
// ! Lesson-------1
class Product {
  constructor(name, price, sale) {
    this.name = name;
    this.price = price;
    this.sale = sale;
  }
}

class Factory {
  static createProduct(name, price) {
    let sale = true;
    if (price < 100) {
      sale = false;
    }
    return new Product(name, price, sale);
  }
}

const product1 = Factory.createProduct("Смартфон", 120);
const product2 = Factory.createProduct("Планшет", 80);
const product3 = Factory.createProduct("Ноутбук", 200);

console.log(product1);
console.log(product2);
console.log(product3);

console.log("--------------------------------------------------------");

// !Lesson---------2

class ShoppingCart {
  constructor() {
    if (!ShoppingCart.instance) {
      this.items = [];
      ShoppingCart.instance = this;
    }

    return ShoppingCart.instance;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItemById(itemId) {
    this.items = this.items.filter((item) => item.id !== itemId);
  }

  getItems() {
    return this.items;
  }
}

const cart1 = new ShoppingCart();
const cart2 = new ShoppingCart();

cart1.addItem({ id: 1, name: "Товар 1", price: 50 });
cart1.addItem({ id: 2, name: "Товар 2", price: 70 });
cart1.addItem({ id: 3, name: "Товар 2", price: 100 });
cart1.addItem({ id: 4, name: "Товар 2", price: 150 });
cart1.addItem({ id: 5, name: "Товар 2", price: 200 });

cart1.removeItemById(2);

console.log(cart1.getItems());
console.log(cart2.getItems());

console.log(cart1 === cart2);
console.log("--------------------------------------------------------");
