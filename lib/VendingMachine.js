class VendingMachine {
  constructor(inventory) {
    this.inventory = inventory;
  }
  despenseItem(productCode, payment) {
    const items = this.inventory["itemInventory"];
    const coins = this.inventory["coinsInventory"];
    const minStock = 2;
    if (payment >= items[productCode]["price"]) {
      const returnChange = payment - items[productCode]["price"];
      items[productCode]["quantity"] -= 1;

      return payment > items[productCode]["price"]
        ? items[productCode]["name"] + " change is: " + returnChange
        : items[productCode]["name"];
    } else {
      const remainder = items[productCode]["price"] - payment;
      throw "Please enter correct amount";
    }
  }

  // removePayedCoin(payment, coin) {
  //   const coinsInventory = this.inventory["coinsInventory"];
  //   if (returnChange) {
  //     const maxCoin = math.Max(coinsInventory[coin]["value"]);
  //   }
  // }

  reStockItem(productCode) {
    const minStockItem = 2;
    const items = this.inventory["itemInventory"];
    if (items[productCode]["quantity"] < minStockItem) {
      return (
        items[productCode]["quantity"] +
        (items[productCode]["maxQuantity"] - items[productCode]["quantity"])
      );
    }
  }

  reStockCoin(coin) {
    const minStockCoin = 4;
    const coinsInventory = this.inventory["coinsInventory"];

    if (coinsInventory[coin]["quantity"] < minStockCoin) {
      return (
        coinsInventory[coin]["quantity"] +
        (coinsInventory[coin]["maxQuantity"] - coinsInventory[coin]["quantity"])
      );
    }
  }
}

module.exports = VendingMachine;
