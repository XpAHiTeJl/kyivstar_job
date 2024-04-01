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

//!Lesson---------3

class OrderState {
  constructor(order) {
    this.order = order;
  }

  cancelOrder() {
    throw new Error("Цей метод не підтримується в поточному стані");
  }

  requestReturn() {
    // throw new Error("Цей метод не підтримується в поточному стані");
  }
}

// Клас стану "В обробці"
class ProcessingState extends OrderState {
  cancelOrder() {
    console.log("Замовлення скасовано.");
    this.order.setState(new CancelledState(this.order));
  }
}

// Клас стану "Очікує на оплату"
class PendingPaymentState extends OrderState {
  cancelOrder() {
    console.log("Замовлення скасовано.");
    this.order.setState(new CancelledState(this.order));
  }
}

// Клас стану "Відправлено"
class ShippedState extends OrderState {
  requestReturn() {
    console.log("Запит на повернення товару зроблено.");
    this.order.setState(new ReturnRequestedState(this.order));
  }
}

// Клас стану "Доставлено"
class DeliveredState extends OrderState {
  requestReturn() {
    console.log("Запит на повернення товару зроблено.");
    this.order.setState(new ReturnRequestedState(this.order));
  }
}

// Клас стану "Скасовано"
class CancelledState extends OrderState {}

// Клас стану "Запит на повернення"
class ReturnRequestedState extends OrderState {}

// Клас замовлення
class Order {
  constructor() {
    this.state = new ProcessingState(this);
  }

  setState(state) {
    this.state = state;
  }

  cancelOrder() {
    this.state.cancelOrder();
  }

  requestReturn() {
    this.state.requestReturn();
  }
}

// Приклад використання:
const order = new Order();

order.cancelOrder(); // Замовлення скасовано.

order.requestReturn(); // Помилка: Цей метод не підтримується в поточному стані

order.setState(new ShippedState(order));
order.requestReturn(); // Запит на повернення товару зроблено.

console.log("--------------------------------------------------------");







class Order {
  constructor(id) {
    this.id = id;
    this.currentState = new ProcessingState(this);
  }

  changeState(state) {
    this.currentState = state;
    console.log(`Замовлення #${this.id} перейшло до стану ${state.constructor.name}`);
  }

  // Делегування методів до стану
  cancel() {
    this.currentState.cancel();
  }

  pay() {
    this.currentState.pay();
  }

  ship() {
    this.currentState.ship();
  }

  deliver() {
    this.currentState.deliver();
  }

  return() {
    this.currentState.return();
  }
}

// Стани замовлення

class ProcessingState {
  constructor(order) {
    this.order = order;
  }

  cancel() {
    console.log(`Замовлення #${this.order.id} скасовано`);
    this.order.changeState(new CancelledState(this.order));
  }

  pay() {
    console.log(`Замовлення #${this.order.id} оплачено`);
    this.order.changeState(new AwaitingPaymentState(this.order));
  }

  ship() {
    console.log(`Замовлення #${this.order.id} не може бути відправлено, поки не буде оплачено`);
  }

  deliver() {
    console.log(`Замовлення #${this.order.id} не може бути доставлено, поки не буде оплачено`);
  }

  return() {
    console.log(`Замовлення #${this.order.id} не може бути повернено, поки не буде оплачено`);
  }
}

class AwaitingPaymentState {
  constructor(order) {
    this.order = order;
  }

  cancel() {
    console.log(`Замовлення #${this.order.id} скасовано`);
    this.order.changeState(new CancelledState(this.order));
  }

  pay() {
    console.log(`Замовлення #${this.order.id} вже оплачено`);
  }

  ship() {
    console.log(`Замовлення #${this.order.id} відправлено`);
    this.order.changeState(new ShippedState(this.order));
  }

  deliver() {
    console.log(`Замовлення #${this.order.id} не може бути доставлено, поки не буде відправлено`);
  }

  return() {
    console.log(`Замовлення #${this.order.id} не може бути повернено, поки не буде відправлено`);
  }
}

class ShippedState {
  constructor(order) {
    this.order = order;
  }

  cancel() {
    console.log(`Замовлення #${this.order.id} не може бути скасовано, бо вже відправлено`);
  }

  pay() {
    console.log(`Замовлення #${this.order.id} вже оплачено`);
  }

  ship() {
    console.log(`Замовлення #${this.order.id} вже відправлено`);
  }

  deliver() {
    console.log(`Замовлення #${this.order.id} доставлено`);
    this.order.changeState(new DeliveredState(this.order));
  }

  return() {
    console.log(`Замовлення #${this.order.id} не може бути повернено, поки не буде доставлено`);
  }
}

class DeliveredState {
  constructor(order) {
    this.order = order;
  }
}

  cancel() {
    console.log(`Замовлення #${this.order.id} не може бути скасовано, бо вже доставлено`);
  }

  pay() {
  console.log(`Замовлення #${this.order.id}`)
  }
  