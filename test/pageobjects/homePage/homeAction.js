const homeLocator = require("./homeLocator");

class HomeAction {
    async clickSortButton() {
        await homeLocator.sortButton.click();
    }
    async selectNameAscending() {
        await homeLocator.nameAscending.click();
    }
    async selectNameDescending() {
        await homeLocator.nameDescending.click();
    }

    async selectPriceAscending() {
        await homeLocator.priceAscending.click();
    }
    async selectPriceDescending() {
        await homeLocator.priceDescending.click();
    }
    async verifyAllproduct(){
        const products = await $$("//android.widget.TextView[@content-desc='Product Name']");
    const productNames = [];
    for (let product of products) {
      const productName = await product.getText();
      productNames.push(productName);
    }
    return productNames;
    }
    async verifyAscendingProduct(){
        const actualProducts = await this.verifyAllproduct();
        const expectedResult = [...actualProducts].sort((a, b) => a - b);
        expect(actualProducts).toEqual(expectedResult);
    }
    async verifyDescendingProduct(){
        const actualProducts = await this.verifyAllproduct();
        const expectedResult = [...actualProducts].sort((a, b) => b - a);
        expect(actualProducts).toEqual(expectedResult);
    }

    async verifyAllPrices() {
    const prices = await  $$("//android.widget.TextView[@content-desc='Product Price']");
    const priceValues = [];
    for (let price of prices) {
      const priceText = await price.getText();
      const numericPrice = parseFloat(priceText.replace(/[^0-9.-]+/g, "")); 
      priceValues.push(numericPrice);
    }
    return priceValues;

    }


    async verifyAscendingPrice(){
        const actualPrices = await this.verifyAllPrices();
        const expectedResult = [...actualPrices].sort((a, b) => a - b);
        expect(actualPrices).toEqual(expectedResult);
    }


    async verifyDescendingPrice() {
        const actualPrices = await this.verifyAllPrices();
        const expectedResult = [...actualPrices].sort((a, b) => b - a);
        expect(actualPrices).toEqual(expectedResult);

    }
    


}
module.exports = new HomeAction();