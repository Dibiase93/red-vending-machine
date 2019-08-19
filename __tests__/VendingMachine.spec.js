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

    // describe("when input productCode is A3 and payment is greater than $2.50", () => {
    //   it("should return item vanilla coke with with change equal to payment - $2.50", () => {
    //     expect(vendingMachine.despenseItem("A3", 3)).toEqual(
    //       "Vanilla Cola" + 0.5
    //     );
    //   });
    // });
  });
});
