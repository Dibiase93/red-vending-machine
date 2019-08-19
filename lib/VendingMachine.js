class VendingMachine {
  constructor(inventory) {
    this.inventory = inventory;
  }

  despenseItem(productCode, payment) {
    const items = this.inventory["itemInventory"];
    if (payment >= items[productCode]["price"]) {
      // const returnChange = payment - items[productCode]["price"];
      items[productCode]["quantity"] -= 1;
      return items[productCode]["name"];
    } else {
      const remainder = items[productCode]["price"] - payment;
      throw "Please enter correct amount";
    }
  }
}

module.exports = VendingMachine;
