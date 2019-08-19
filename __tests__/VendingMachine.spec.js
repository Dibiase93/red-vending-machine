const inventory = require("../inventory.json");
const VendingMachine = require("../lib/VendingMachine.js");

const vendingMachine = new VendingMachine(inventory);
describe("VendingMachine", () => {
  describe("despenseItem()", () => {
    describe("when input productCode is A1 and payment is $2.00", () => {
      it("should return item coke with no change", () => {
        expect(vendingMachine.despenseItem("A1", 2)).toEqual("Coca Cola");
      });
    });

    describe("when input productCode is A2 and payment is less than $1.75", () => {
      it("should return throw 'Please enter correct amount'", () => {
        expect(() => vendingMachine.despenseItem("A2", 1)).toThrow(
          "Please enter correct amount"
        );
      });
    });

    describe("when input productCode is A3 and payment is greater than $2.50", () => {
      it("should return item vanilla coke with with change equal to payment - $2.50", () => {
        expect(vendingMachine.despenseItem("A3", 3)).toEqual(
          "Vanilla Coke" + " change is: " + 0.5
        );
      });
    });

    describe("quantity is less than minStockItem", () => {
      it("should be true", () => {
        expect(vendingMachine.despenseItem("B1", 2.5)).toBeTruthy();
      });
    });

    describe("quantity is less than minStockItem is true", () => {
      it("should run reStockItem() and equal max quantity 10 ", () => {
        expect(vendingMachine.reStockItem("B1")).toEqual(10);
      });
    });

    // describe("coin quantity is less than minStockCoin", () => {
    //     it("should be true", () => {
    //       expect(vendingMachine.despenseItem("B1", 2.5)).toBeTruthy();
    //     });
    //   });

    describe("coin quantity is less than minstockCoin is true", () => {
      it("should run reStockCoin() and equal max quantity 200 ", () => {
        expect(vendingMachine.reStockCoin("5 cents")).toEqual(200);
      });
    });
  });
});
